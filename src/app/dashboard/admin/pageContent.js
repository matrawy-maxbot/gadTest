"use client";
import { useState, useEffect } from 'react';
import { ApiClient } from '../../api/api';
import styles from "./page.module.css";
import Nav from './components/nav';
import ViewCards from './components/view_cards';
import Choices from './components/choices';
import PendingRequests from './components/pendingRequests';
import AllRequests from './components/allRequests';
import AllClients from './components/allClients';
import DesignProjects from './components/designProjects';
import ProgrammingProjects from './components/programmingProjects';
import PrintingProjects from './components/printingProjects';
import Charts from './components/charts';
import DownloadWindow from './components/downloadWindow';
import RemoveWindow from './components/removeWindow';
import AddRequestWindow from './components/addRequestWindow';
import MessagePopUp from './components/messagePopUp';
import ClientScriptLoader from './components/ClientScriptLoader';
import "./dashboard.css";

const failedLogin = () => {
  window.location.href = "/dashboard/login";
};

export default function DashboardContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      if (typeof window !== 'undefined') {
        const api = new ApiClient("http://localhost:4000");
        const token = sessionStorage.getItem("accessToken");
        if (!token) return failedLogin();

        try {
          const checkToken = api.checkToken();
          if (!checkToken) return failedLogin();

          const loginToken = await api.login(checkToken);
          if (!loginToken || loginToken.data?.user?.role !== "admin") {
            console.log("Invalid login token:", loginToken);
            return failedLogin();
          }

          setIsAuthenticated(true);
        } catch (error) {
          console.error("Authentication failed:", error);
          failedLogin();
        }
      }
    };
    validateToken();
  }, []);

  if (!isAuthenticated) {
    return <div>few moments...</div>;
  }

  return (
    <>
      <div className="body-background">
        <div className="gradiant-point point1"></div>
        <div className="gradiant-point point2"></div>
      </div>
      <Nav />
      <div className="container">
        <ViewCards />
        <div className="left-right">
          <div className="left">
            <div className="data-container">
              <div className="header">
                <Choices />
              </div>
              <div className="requests-data">
                <div className="con active">
                  <PendingRequests />
                  <AllRequests />
                  <AllClients />
                </div>
                <DesignProjects />
                <ProgrammingProjects />
                <PrintingProjects />
              </div>
            </div>
          </div>
          <div className="right">
            <Charts />
          </div>
        </div>
      </div>
      <div className="window-container">
        <DownloadWindow />
        <RemoveWindow />
        <AddRequestWindow />
      </div>
      <MessagePopUp />
      <ClientScriptLoader />
    </>
  );
}
