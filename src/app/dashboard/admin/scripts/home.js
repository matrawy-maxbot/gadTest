import { ApiClient } from "../../../api/api";

const api = new ApiClient("http://localhost:4000");

export class allScripts {

    static openAddRequestForm() {
        document.querySelector(".window-container").classList.add('active', 'add');
    }
    
    static closeAddRequestForm() {
        document.querySelector(".window-container").classList.remove('active', 'add');
    }

    static async downloadAll(event, type) {
        let element = event.currentTarget;
        while(!element.classList.contains("download")) {
            element = element.parentElement;
        }
        let filesCollectionType = "design";
        let result;
        switch (type) {
            case "design":
                result = await api.get("/files/downloadCollection/design", {}, false).catch(error => console.error(error));
                filesCollectionType = "design";
                break;
            case "programming":
                result = await api.get("/files/downloadCollection/programming", {}, false).catch(error => console.error(error));
                filesCollectionType = "programming";
                break;
            case "printing":
                result = await api.get("/files/downloadCollection/printing", {}, false).catch(error => console.error(error));
                filesCollectionType = "printing";
                break;
            default:
                break;
        }
        if (!result || !result?.data) console.error(`Error: ${result.status}`, result);
        
        const blob = await result.blob();

        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;

        link.download = filesCollectionType + "_images.zip";
        document.body.appendChild(link);
        link.click();

        link.remove();
        window.URL.revokeObjectURL(downloadUrl);

    }

    static async removeAll(event, type) {
        let element = event.currentTarget;
        while(!element.classList.contains("remove")) {
            element = element.parentElement;
        }
        let result;
        switch (type) {
            case "design":
                result = await api.delete("/files/deleteAll/design", null, {}, false).catch(error => console.error(error));
                break;
            case "programming":
                result = await api.delete("/files/deleteAll/programming", null, {}, false).catch(error => console.error(error));
                break;
            case "printing":
                result = await api.delete("/files/deleteAll/printing", null, {}, false).catch(error => console.error(error));
                break;
            default:
                break;
        }
        console.log(result);
        if (!result || !result?.data) console.error(`Error: ${result.status}`, result);

        let gallery = element;
        while(!gallery.classList.contains("data-set")) {
            gallery = gallery.parentElement;
        }
        const galleryImages = gallery.querySelectorAll(".project-image");
        galleryImages.forEach(gi => gi.remove());

    }

    static getSelectedImages(type) {
        let gallery;
        switch (type) {
            case "design":
                gallery = document.querySelectorAll(".container .left .data-container .requests-data > .data-set.design-projects.selection.active .project-image.selected");
                break;
            case "programming":
                gallery = document.querySelectorAll(".container .left .data-container .requests-data > .data-set.programming-projects.selection.active .project-image.selected");
                break;
            case "printing":
                gallery = document.querySelectorAll(".container .left .data-container .requests-data > .data-set.printing-projects.selection.active .project-image.selected");
                break;
            default:
                console.error("Invalid type");
                break;
        }
        if(!gallery || gallery?.length == 0) return false;
        return gallery;
    }

    static async downloadSelected(event, type, specifics = []) {
        let element = event.currentTarget;
        while(!element.classList.contains("download")) {
            element = element.parentElement;
        }

        let selectedImagesIDs = [];
        if(specifics?.length > 0) {
            specifics = Array.isArray(specifics) ? specifics : Array.from(specifics);
            if(!specifics || specifics?.length == 0) return;

            selectedImagesIDs = specifics.map(i => i.id);
        } else {
            const selectedImages = this.getSelectedImages(type);
            if(!selectedImages || selectedImages?.length == 0) return;
    
            selectedImagesIDs = Array.from(selectedImages).map(i => i.id);
        }

        console.log("selectedImagesIDs : ", selectedImagesIDs);
        
        let filesCollectionType = "design";
        let result;
        switch (type) {
            case "design":
                result = await api.get("/files/downloadCollection/design?specifics=" + selectedImagesIDs.join(","), {}, false).catch(error => console.error(error));
                filesCollectionType = "design";
                break;
            case "programming":
                result = await api.get("/files/downloadCollection/programming?specifics=" + selectedImagesIDs.join(","), {}, false).catch(error => console.error(error));
                filesCollectionType = "programming";
                break;
            case "printing":
                result = await api.get("/files/downloadCollection/printing?specifics=" + selectedImagesIDs.join(","), {}, false).catch(error => console.error(error));
                filesCollectionType = "printing";
                break;
            default:
                break;
        }
        if (!result || !result?.data) console.error(`Error: ${result.status}`, result);
        
        const blob = await result.blob();

        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;

        link.download = filesCollectionType + "_images.zip";
        document.body.appendChild(link);
        link.click();

        link.remove();
        window.URL.revokeObjectURL(downloadUrl);
    }

    static async downloadImage(event) {
        let element = event.currentTarget;
        while (!element.classList.contains("project-image")) {
            element = element.parentElement;
        }
        if (!element) return;
    
        const image = element.querySelector("img");
    
        console.log("image : ", image, image.src);
    
        try {
            // Fetch the image as a Blob
            const response = await fetch(image.src);
            const blob = await response.blob();
    
            // Create a download URL from the Blob
            const downloadUrl = window.URL.createObjectURL(blob);
    
            // Create a link element to trigger the download
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = image.src.split("/").pop(); // Extract file name from URL
    
            document.body.appendChild(link);
            link.click();
    
            // Clean up the link and URL
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error("Error downloading image:", error);
        }
    }

    static async removeSelected(event, type, specifics = []) {

        let selectedImages = [];
        let selectedImagesIDs = [];
        if(specifics?.length > 0) {
            specifics = Array.isArray(specifics) ? specifics : Array.from(specifics);
            if(!specifics || specifics?.length == 0) return;
            selectedImages = specifics;

            selectedImagesIDs = specifics.map(i => i.querySelector("img")).map(i => {let x = i.src.split("/"); return x[x.length-1]});
        } else {
            selectedImages = this.getSelectedImages(type);
            if(!selectedImages || selectedImages?.length == 0) return;
    
            selectedImagesIDs = Array.from(selectedImages).map(i => i.querySelector("img")).map(i => {let x = i.src.split("/"); return x[x.length-1]});
        }

        console.log("selectedImagesIDs : ", selectedImagesIDs);

        const data = {
            file: selectedImagesIDs
        }

        let result;
        switch (type) {
            case "design":
                result = await api.delete("/files/delete/design", data, {}, false).catch(error => console.error(error));
                break;
            case "programming":
                result = await api.delete("/files/delete/programming", data, {}, false).catch(error => console.error(error));
                break;
            case "printing":
                result = await api.delete("/files/delete/printing", data, {}, false).catch(error => console.error(error));
                break;
            default:
                break;
        }
        if (!result || !result?.data) console.error(`Error: ${result.status}`, result);
        selectedImages.forEach(i => i.remove());
    }

    static selectAll(gallery) {
        console.log("clicked man!");
        const galleryElement = document.querySelector(".container .left .data-container .requests-data > .data-set.active.selection");
        const galleryImages = galleryElement.querySelectorAll(".project-image");
        const galleryImagesSelected = galleryElement.querySelectorAll(".project-image.selected");
        const selectedImagesCount = document.querySelector(".container .left .data-container .requests-data > .data-set.active.selection .gallery-header .selected-items .count-container .count");
        if(!selectedImagesCount) return;
        if(galleryElement.classList.contains("selected-all")) {
            console.log("remove active");
            galleryElement.classList.remove("selected-all");
            galleryImagesSelected.forEach(i => i.classList.remove("selected"));
            selectedImagesCount.textContent = 0;
            galleryElement.classList.remove("selection");
        } else {
            console.log("add active");
            galleryElement.classList.add("selected-all");
            galleryImages.forEach(i => i.classList.add("selected"));
            selectedImagesCount.textContent = galleryImages.length;
        }
    }

}


export default function initializeClientSideScripts() {

    function handleClick(event) {
        const element = event.currentTarget;
        const input = element.querySelector("input");
        if (input) {
            input.click();
        }
    }
            
    const uploadButtons = document.querySelectorAll(".container .left .data-container .requests-data > .data-set .gallery-header .all-tools .upload-images");

    uploadButtons.forEach((element, i) => {
        element.removeEventListener("click", handleClick);
        element.addEventListener("click", handleClick);
    });

    var previousAllRequests = [{id:"0"}];
    var previousPendingRequests = [{id:"0"}];
    var previousAllClients = [{id:"0"}];
    var previousDesignProjects = [{id:"0"}];
    var previousProgrammingProjects = [{id:"0"}];
    var previousPrintingProjects = [{id:"0"}];
    
    function setChart(...charts) {
        for (let i = 0; i < document.getElementsByClassName("chart").length; i++) {
            const chart = document.getElementsByClassName("chart")[i];
            const value = charts[i] || chart.getAttribute("fill");
            const color = chart.getAttribute("color");
            chart.setAttribute("fill", value);
            chart.style.setProperty("--fill", value);
            chart.style.setProperty("--fill_color", color);
        }
    }

    function setImpressionsChart(percent) {
        let chart = document.querySelector(".container .right .visit-count .visits .chart-container .chart#impressions-chart");
        let color = chart.getAttribute("color");
        chart.setAttribute("fill", percent);
        chart.style.setProperty("--fill", percent);
        chart.style.setProperty("--fill_color", color);
    }

    function resetGallery(gallery, force = false) {
        gallery = gallery || document.querySelector(".container .left .data-container .requests-data > .data-set.active");
        if(!gallery) return;
        let width = gallery.offsetWidth;
        if(width > 620) {
            largeGallery(gallery, force);
        }
        if(width <= 620 && width > 400) {
            mediumGallery(gallery, force);
        }
        if(width <= 400) {
            smallGallery(gallery, force);
        }
    }
    
    function largeGallery(gallery, force = false) {
        let galleryCols = gallery.querySelectorAll(".col").length;
        if(galleryCols != 3 || force) {
            let allImages = sortImages(gallery.querySelectorAll(".col .project-image").length, gallery.querySelectorAll(".col-1 .project-image"), gallery.querySelectorAll(".col-2 .project-image"), gallery.querySelectorAll(".col-3 .project-image"));
            let col_1 = document.createElement("div");
            let col_2 = document.createElement("div");
            let col_3 = document.createElement("div");
            col_1.className = "col col-1";
            col_2.className = "col col-2";
            col_3.className = "col col-3";
            let counter = 1;
            for (let i = 0; i < allImages.length; i++) {
                if(counter > 3) counter = 1;
                if(counter == 1) col_1.appendChild(allImages[i]);
                else if(counter == 2) col_2.appendChild(allImages[i]);
                else if(counter == 3) col_3.appendChild(allImages[i]);
                counter++;
            }
            gallery.querySelector(".columns").innerHTML = "";
            gallery.querySelector(".columns").style.setProperty("grid-template-columns", "32.27% 32.27% 32.27%");
            gallery.querySelector(".columns").appendChild(col_1);
            gallery.querySelector(".columns").appendChild(col_2);
            gallery.querySelector(".columns").appendChild(col_3);
        }
        
    }
    
    function mediumGallery(gallery, force = false) {
        let galleryCols = gallery.querySelectorAll(".col").length;
        if(galleryCols != 2 || force) {
            let allImages = sortImages(gallery.querySelectorAll(".col .project-image").length, gallery.querySelectorAll(".col-1 .project-image"), gallery.querySelectorAll(".col-2 .project-image"), gallery.querySelectorAll(".col-3 .project-image"));
            let col_1 = document.createElement("div");
            let col_2 = document.createElement("div");
            col_1.className = "col col-1";
            col_2.className = "col col-2";
            let counter = 1;
            for (let i = 0; i < allImages.length; i++) {
                if(counter > 2) counter = 1;
                if(counter == 1) col_1.appendChild(allImages[i]);
                else if(counter == 2) col_2.appendChild(allImages[i]);
                counter++;
            }
            gallery.querySelector(".columns").innerHTML = "";
            gallery.querySelector(".columns").style.setProperty("grid-template-columns", "48.5% 48.5%");
            gallery.querySelector(".columns").appendChild(col_1);
            gallery.querySelector(".columns").appendChild(col_2);
        }
    }
    
    function smallGallery(gallery, force = false) {
        let galleryCols = gallery.querySelectorAll(".col").length;
        if(galleryCols != 1 || force) {
            let allImages = sortImages(gallery.querySelectorAll(".col .project-image").length, gallery.querySelectorAll(".col-1 .project-image"), gallery.querySelectorAll(".col-2 .project-image"), gallery.querySelectorAll(".col-3 .project-image"));
            let col_1 = document.createElement("div");
            col_1.className = "col col-1";
            for (let i = 0; i < allImages.length; i++) {
                col_1.appendChild(allImages[i]);
            }
            gallery.querySelector(".columns").innerHTML = "";
            gallery.querySelector(".columns").style.setProperty("grid-template-columns", "100%");
            gallery.querySelector(".columns").appendChild(col_1);
        }
    }
    
    function sortImages(size, ...images) {
        images = images.filter(image => image.length > 0);
        let counter = 0;
        let id = 0;
        let allImages = [];
        for (let j = 0; j < size; j++) {
            if(counter >= images.length) {
                counter = 0;
                id++;
            }
            allImages.push(images[counter][id]);
            counter++;
        }
        return allImages;
    }

    function getParam(paramName, url = window.location.href) {
        const urlParams = new URLSearchParams(new URL(url).search);
        return urlParams.get(paramName);
    }

    function deepEqual(obj1, obj2) {
        if (typeof obj1 !== typeof obj2) return false;
        if (obj1 === obj2) return true;
        if (obj1 === null || obj2 === null) return false;
        if (Array.isArray(obj1) && Array.isArray(obj2)) {
            if (obj1.length !== obj2.length) return false;
            return obj1.every((el, index) => deepEqual(el, obj2[index]));
        }
        if (typeof obj1 === "object" && typeof obj2 === "object") {
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);
            if (keys1.length !== keys2.length) return false;
            return keys1.every((key) => obj2.hasOwnProperty(key) && deepEqual(obj1[key], obj2[key]));
        }
        return false;
    }
    
    function areArraysEqual(array1, array2) {
        if (!Array.isArray(array1) || !Array.isArray(array2)) {
            console.error("Both inputs must be arrays");
        }
        if (array1.length !== array2.length) return false;
        return deepEqual(array1, array2);
    }

    function imageError(event) {
        const element = event.target;
        let elementParent = element;
        while(!elementParent.getAttribute("id")) {
            elementParent = elementParent.parentElement;
        }
        console.error("Image error : ", elementParent.getAttribute("id"), element.getAttribute("src"));
        element.style.setProperty("display", "none");
    }

    function openWhatsapp(phoneNumber) {
        console.log("whatsapp clicked!");
        if (!phoneNumber) {
            console.error("Phone number is required!");
            return;
        }
        phoneNumber = refactorPhoneNumber(phoneNumber);
        const formattedNumber = phoneNumber.startsWith('0') ? phoneNumber.slice(1) : phoneNumber;
        const link = `https://wa.me/${formattedNumber}`;
        window.open(link, '_blank');
    }
    
    function refactorPhoneNumber(phoneNumber) {
        let cleanedNumber = phoneNumber.replace(/[^+\d]/g, '');
        if (cleanedNumber.startsWith('0')) {
            cleanedNumber = cleanedNumber.slice(1);
        } else if(cleanedNumber.startsWith('+')) {
            if(cleanedNumber[1] == '0') cleanedNumber = cleanedNumber.slice(1);
        }
        return cleanedNumber;
    }

    window.onresize = () => {
        resetGallery();
    };

    async function init() {
        const impressionsGoal = 10000;
    
        let requestsCount = 0;
        let clientsCount = 0;
        let designProjectsCount = 0;
        let programmingProjectsCount = 0;
        let printingProjectsCount = 0;
        let impressionsCount = 0;
        let totalProjects = 0;
    
        const allRequests = await api.get("/requests").catch(error => console.error(error));
        const allClients = await api.get("/clients").catch(error => console.error(error));
        const allDesignProjects = await api.get("/files/designprojects").catch(error => console.error(error));
        const allProgrammingProjects = await api.get("/files/programmingprojects").catch(error => console.error(error));
        const allPrintingProjects = await api.get("/files/printingprojects").catch(error => console.error(error));
        //const allImpressions = await api.get("/impressions/count").catch(error => console.error(error));
        if(allRequests.message == "success") requestsCount = allRequests.data?.length || 0;
        if(allClients.message == "success") clientsCount = allClients.data?.length || 0;
        if(allDesignProjects.message == "success") designProjectsCount = allDesignProjects.data?.length || 0;
        if(allProgrammingProjects.message == "success") programmingProjectsCount = allProgrammingProjects.data?.length || 0;
        if(allPrintingProjects.message == "success") printingProjectsCount = allPrintingProjects.data?.length || 0;
        //if(allImpressions.message == "success") impressionsCount = allImpressions.data;
    
        //console.log(allRequests, allClients, allDesignProjects, allProgrammingProjects, allPrintingProjects);
    
        document.getElementById("requests-count").innerHTML = requestsCount;
        //document.getElementById("clients-count").innerHTML = clientsCount;
        document.getElementById("design-projects-count").innerHTML = designProjectsCount;
        document.getElementById("programming-projects-count").innerHTML = programmingProjectsCount;
        document.getElementById("printing-projects-count").innerHTML = printingProjectsCount;
        document.getElementById("All-projects-count").innerHTML = totalProjects = designProjectsCount + programmingProjectsCount + printingProjectsCount;
        document.getElementById("impressions-count").innerHTML = impressionsCount;
        let designProjectsPercent = Math.round((designProjectsCount / totalProjects) * 100);
        let programmingProjectsPercent = Math.round((programmingProjectsCount / totalProjects) * 100);
        let printingProjectsPercent = Math.round((printingProjectsCount / totalProjects) * 100);
        document.getElementById("design-projects-percent").innerHTML = designProjectsPercent + "%";
        document.getElementById("programming-projects-percent").innerHTML = programmingProjectsPercent + "%";
        document.getElementById("printing-projects-percent").innerHTML = printingProjectsPercent + "%";
        setChart(100, programmingProjectsPercent + designProjectsPercent, designProjectsPercent);
        let impressionsPercent = Math.round((impressionsCount / impressionsGoal) * 100);
        document.getElementById("impressions-percent").innerHTML = impressionsPercent + "<span>%</span>";
        setImpressionsChart(impressionsPercent);
    
        setPendingRequests(false, allRequests);
        setAllRequests(false, allRequests);
        setAllClients(false, allClients);
        setDesignProjects(false, allDesignProjects);
        setProgrammingProjects(false, allProgrammingProjects);
        setPrintingProjects(false, allPrintingProjects);
    }

    async function setPendingRequests(active, allRequests) {

        if(allRequests){
    
            if (allRequests?.message != "success") return;
            let requests = allRequests?.data || [];
            if(!Array.isArray(requests)) requests = [requests];
            requests = requests.filter(request => request.action == 0 && request.denied == 0);
            let compare = areArraysEqual(requests, previousPendingRequests);
            if(compare) return;
            previousPendingRequests = requests;
            const element = document.querySelector(".container .left .data-container .requests-data .con > .pending-requests table thead");
            const elementBody = document.querySelector(".container .left .data-container .requests-data .con > .pending-requests table tbody");
            element.innerHTML = "";
            element.innerHTML = `
                <tr class="data-header">
                    <th class="name">company name</th>
                    <th class="company-size">company size</th>
                    <th class="requires">business requires</th>
                    <th class="contact">contact numbers</th>
                    <th class="whatsapp">whatsapp numbers</th>
                    <th class="actions">actions</th>
                </tr>
            `;
            elementBody.innerHTML = "";
            if(requests[0]?.id) {
                for (let i = 0; i < requests.length; i++) {
                    const request = requests[i];
                    const row = document.createElement("tr");
                    row.className = "data-content";
                    row.id = request.id;
                    let randomIconNumber = Math.floor(Math.random() * 6) + 1;
                    let rowBusiness = "";
                    if (request.business_requires.includes("design")) rowBusiness += `<span class="design"> <svg viewBox="0 0 512 512"><path d="M499.377 46.402c-8.014-8.006-18.662-12.485-29.985-12.613a41.13 41.13 0 0 0-.496-.003c-11.142 0-21.698 4.229-29.771 11.945L198.872 275.458c25.716 6.555 47.683 23.057 62.044 47.196a113.544 113.544 0 0 1 10.453 23.179L500.06 106.661C507.759 98.604 512 88.031 512 76.89c0-11.507-4.478-22.33-12.623-30.488zM176.588 302.344a86.035 86.035 0 0 0-3.626-.076c-20.273 0-40.381 7.05-56.784 18.851-19.772 14.225-27.656 34.656-42.174 53.27C55.8 397.728 27.795 409.14 0 416.923c16.187 42.781 76.32 60.297 115.752 61.24 1.416.034 2.839.051 4.273.051 44.646 0 97.233-16.594 118.755-60.522 23.628-48.224-5.496-112.975-62.192-115.348z"></path></svg> Design</span>`;
                    if (request.business_requires.includes("programming")) rowBusiness += `<span class="programming"> <svg viewBox="0 0 24 24"><path d="m1.293 12.707 4 4a1 1 0 1 0 1.414-1.414L3.414 12l3.293-3.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414zM18.707 7.293a1 1 0 1 0-1.414 1.414L20.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414zM13.039 4.726l-4 14a1 1 0 0 0 .686 1.236A1.053 1.053 0 0 0 10 20a1 1 0 0 0 .961-.726l4-14a1 1 0 1 0-1.922-.548z"></path></svg> Programming </span>`;
                    if (request.business_requires.includes("printing")) rowBusiness += `<span class="printing"> <svg viewBox="0 0 512 512"><path d="M329.956 399.834H182.044c-9.425 0-17.067 7.641-17.067 17.067s7.641 17.067 17.067 17.067h147.911c9.425 0 17.067-7.641 17.067-17.067s-7.641-17.067-17.066-17.067zM329.956 346.006H182.044c-9.425 0-17.067 7.641-17.067 17.067s7.641 17.067 17.067 17.067h147.911c9.425 0 17.067-7.641 17.067-17.067s-7.641-17.067-17.066-17.067z"></path><path d="M472.178 133.907h-54.303V35.132c0-9.425-7.641-17.067-17.067-17.067H111.192c-9.425 0-17.067 7.641-17.067 17.067v98.775H39.822C17.864 133.907 0 151.772 0 173.73v171.702c0 21.958 17.864 39.822 39.822 39.822h54.306v91.614c0 9.425 7.641 17.067 17.067 17.067h289.61c9.425 0 17.067-7.641 17.067-17.067v-91.614h54.306c21.958 0 39.822-17.864 39.822-39.822V173.73c0-21.957-17.864-39.823-39.822-39.823zm-343.92-81.708h255.483v81.708H128.258V52.199zm255.48 407.602H128.262V320.173h255.477l-.001 139.628zm17.07-225.679h-43.443c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h43.443c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067z"></path></svg> Printing</span>`;
                    let rowContacts = "";
                    let contacts = request.client.contact_numbers;
                    if(!Array.isArray(contacts)) contacts = contacts.split(",");
                    for(let i = 0; i < contacts.length; i++) {
                        rowContacts += `<span> <svg viewBox="0 0 100 100"><path d="M92.134 66.144c3.468.867 5.662 4.054 5.301 7.691l-1.088 11.433c-.582 9.684-7.217 13.406-15.623 11.914C39.212 92.105 7.886 60.824 2.796 19.254.416 2.16 14.201 3.904 26.143 2.544c3.66-.385 6.817 1.826 7.684 5.293l2.995 11.908c.845 3.881 3.092 8.549.107 12.343l-5.046 8.587c-1.024 1.456-1.21 3.133-.553 4.512 4.988 10.444 12.993 18.54 23.248 23.564 1.356.68 3.062.507 4.385-.44l9.047-5.353c3.689-2.88 8.42-.628 12.252.197z"></path></svg> ${contacts[i]}</span>`;
                    }
                    let rowWhatsapp = [];
                    let whatsapp = request.client.whatsapp_numbers;
                    if(!Array.isArray(whatsapp)) whatsapp = whatsapp.split(",");
                    for(let i = 0; i < whatsapp.length; i++) {
                        let spanElement = document.createElement("span");
                        spanElement.onclick = () => openWhatsapp(whatsapp[i]);
                        spanElement.innerHTML = `
                            <svg viewBox="0 0 418.135 418.135">
                                <g>
                                    <path fill="inherit" d="M198.929.242C88.5 5.5 1.356 97.466 1.691 208.02c.102 33.672 8.231 65.454 22.571 93.536L2.245 408.429c-1.191 5.781 4.023 10.843 9.766 9.483l104.723-24.811c26.905 13.402 57.125 21.143 89.108 21.631 112.869 1.724 206.982-87.897 210.5-200.724C420.113 93.065 320.295-5.538 198.929.242zm124.957 321.955c-30.669 30.669-71.446 47.559-114.818 47.559-25.396 0-49.71-5.698-72.269-16.935l-14.584-7.265-64.206 15.212 13.515-65.607-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713 0-43.373 16.89-84.149 47.559-114.819 30.395-30.395 71.837-47.56 114.822-47.56 43.372.001 84.147 16.891 114.816 47.559 30.669 30.669 47.559 71.445 47.56 114.817-.001 42.986-17.166 84.428-47.561 114.822z"></path>
                                    <path fill="inherit" d="m309.712 252.351-40.169-11.534a14.971 14.971 0 0 0-14.816 3.903l-9.823 10.008c-4.142 4.22-10.427 5.576-15.909 3.358-19.002-7.69-58.974-43.23-69.182-61.007-2.945-5.128-2.458-11.539 1.158-16.218l8.576-11.095a14.97 14.97 0 0 0 1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356-11.211 9.482-24.513 23.891-26.13 39.854-2.851 28.144 9.219 63.622 54.862 106.222 52.73 49.215 94.956 55.717 122.449 49.057 15.594-3.777 28.056-18.919 35.921-31.317 5.362-8.453 1.128-19.679-8.494-22.442z"></path>
                                </g>
                            </svg> ${whatsapp[i]}`;
                        rowWhatsapp.push(spanElement);
                    }

                    let agreeElement = document.createElement("div");
                    agreeElement.className = "agree";
                    agreeElement.innerHTML = `<svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"></path></svg>`;
                    agreeElement.addEventListener("click", (event) => approveRequest(event));

                    let cancelElement = document.createElement("div");
                    cancelElement.className = "cancel";
                    cancelElement.innerHTML = `<svg viewBox="0 0 492 492"><path d="M300.188 246 484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"></path></svg>`;
                    cancelElement.addEventListener("click", (event) => deniedRequest(event));

                    row.innerHTML = `
                        <td class="name"><div class="flex"><div class="company-icon"><img src="/images/dashboard/company_icons/company${randomIconNumber}.png" alt="company icon"></div><span>${request.client.name}</span></div></td>
                        <td class="company-size">${request.client.company_size}</td>
                        <td class="requires"><div class="flex">${rowBusiness}</div></td>
                        <td class="contact"><div class="flex column-flex">${rowContacts}</div></td>
                        <td class="whatsapp"><div class="flex column-flex"></div></td>
                        <td class="actions">
                            <div class="flex">
                            </div>
                        </td>
                    `;
                    row.querySelector(".actions .flex").appendChild(agreeElement);
                    row.querySelector(".actions .flex").appendChild(cancelElement);
                    rowWhatsapp.forEach(span => row.querySelector(".whatsapp > .flex").appendChild(span));
                    elementBody.appendChild(row);
                }
            }
        }
        if(active) {
            const elementButton = document.querySelector(".container .left .data-container .header .choices .row .choice#pending-requests");
            const otherButtons = document.querySelectorAll(".container .left .data-container .header .choices .row .choice");
            for (let i = 0; i < otherButtons.length; i++) {
                otherButtons[i].classList.remove("active");
            }
            elementButton.classList.add("active");
            const element = document.querySelector(".container .left .data-container .requests-data .con > .pending-requests");
            const otherElements = document.querySelectorAll(".container .left .data-container .requests-data .data-set");
            for (let i = 0; i < otherElements.length; i++) {
                otherElements[i].classList.remove("active");
            }
            element.classList.add("active");
        }
    
    }
    
    async function setAllRequests(active, allRequests) {
    
        if(allRequests){
    
            if (allRequests?.message != "success") return;
            let requests = allRequests?.data || [];
            if(!Array.isArray(requests)) requests = [requests];
            requests = requests.filter(request => request.action == 1 || request.denied == 1);
            let compare = areArraysEqual(requests, previousAllRequests);
            if(compare) return;
            previousAllRequests = requests;
            const element = document.querySelector(".container .left .data-container .requests-data .con > .all-requests table thead");
            const elementBody = document.querySelector(".container .left .data-container .requests-data .con > .all-requests table tbody");
            element.innerHTML = "";
            element.innerHTML = `
                <tr class="data-header">
                    <th class="name">company name</th>
                    <th class="company-size">company size</th>
                    <th class="requires">business requires</th>
                    <th class="contact">contact numbers</th>
                    <th class="whatsapp">whatsapp numbers</th>
                </tr>
            `;
            elementBody.innerHTML = "";
            if(requests[0]?.id) {
                for (let i = 0; i < requests.length; i++) {
                    const request = requests[i];
                    const row = document.createElement("tr");
                    row.className = "data-content";
                    row.id = request.id;
                    let randomIconNumber = Math.floor(Math.random() * 6) + 1;
                    let rowBusiness = "";
                    if (request.business_requires.includes("design")) rowBusiness += `<span class="design"> <svg viewBox="0 0 512 512"><path d="M499.377 46.402c-8.014-8.006-18.662-12.485-29.985-12.613a41.13 41.13 0 0 0-.496-.003c-11.142 0-21.698 4.229-29.771 11.945L198.872 275.458c25.716 6.555 47.683 23.057 62.044 47.196a113.544 113.544 0 0 1 10.453 23.179L500.06 106.661C507.759 98.604 512 88.031 512 76.89c0-11.507-4.478-22.33-12.623-30.488zM176.588 302.344a86.035 86.035 0 0 0-3.626-.076c-20.273 0-40.381 7.05-56.784 18.851-19.772 14.225-27.656 34.656-42.174 53.27C55.8 397.728 27.795 409.14 0 416.923c16.187 42.781 76.32 60.297 115.752 61.24 1.416.034 2.839.051 4.273.051 44.646 0 97.233-16.594 118.755-60.522 23.628-48.224-5.496-112.975-62.192-115.348z"></path></svg> Design</span>`;
                    if (request.business_requires.includes("programming")) rowBusiness += `<span class="programming"> <svg viewBox="0 0 24 24"><path d="m1.293 12.707 4 4a1 1 0 1 0 1.414-1.414L3.414 12l3.293-3.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414zM18.707 7.293a1 1 0 1 0-1.414 1.414L20.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414zM13.039 4.726l-4 14a1 1 0 0 0 .686 1.236A1.053 1.053 0 0 0 10 20a1 1 0 0 0 .961-.726l4-14a1 1 0 1 0-1.922-.548z"></path></svg> Programming </span>`;
                    if (request.business_requires.includes("printing")) rowBusiness += `<span class="printing"> <svg viewBox="0 0 512 512"><path d="M329.956 399.834H182.044c-9.425 0-17.067 7.641-17.067 17.067s7.641 17.067 17.067 17.067h147.911c9.425 0 17.067-7.641 17.067-17.067s-7.641-17.067-17.066-17.067zM329.956 346.006H182.044c-9.425 0-17.067 7.641-17.067 17.067s7.641 17.067 17.067 17.067h147.911c9.425 0 17.067-7.641 17.067-17.067s-7.641-17.067-17.066-17.067z"></path><path d="M472.178 133.907h-54.303V35.132c0-9.425-7.641-17.067-17.067-17.067H111.192c-9.425 0-17.067 7.641-17.067 17.067v98.775H39.822C17.864 133.907 0 151.772 0 173.73v171.702c0 21.958 17.864 39.822 39.822 39.822h54.306v91.614c0 9.425 7.641 17.067 17.067 17.067h289.61c9.425 0 17.067-7.641 17.067-17.067v-91.614h54.306c21.958 0 39.822-17.864 39.822-39.822V173.73c0-21.957-17.864-39.823-39.822-39.823zm-343.92-81.708h255.483v81.708H128.258V52.199zm255.48 407.602H128.262V320.173h255.477l-.001 139.628zm17.07-225.679h-43.443c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h43.443c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067z"></path></svg> Printing</span>`;
                    let rowContacts = "";
                    let contacts = request.client.contact_numbers;
                    if(!Array.isArray(contacts)) contacts = contacts.split(",");
                    for(let i = 0; i < contacts.length; i++) {
                        rowContacts += `<span> <svg viewBox="0 0 100 100"><path d="M92.134 66.144c3.468.867 5.662 4.054 5.301 7.691l-1.088 11.433c-.582 9.684-7.217 13.406-15.623 11.914C39.212 92.105 7.886 60.824 2.796 19.254.416 2.16 14.201 3.904 26.143 2.544c3.66-.385 6.817 1.826 7.684 5.293l2.995 11.908c.845 3.881 3.092 8.549.107 12.343l-5.046 8.587c-1.024 1.456-1.21 3.133-.553 4.512 4.988 10.444 12.993 18.54 23.248 23.564 1.356.68 3.062.507 4.385-.44l9.047-5.353c3.689-2.88 8.42-.628 12.252.197z"></path></svg> ${contacts[i]}</span>`;
                    }
                    let rowWhatsapp = [];
                    let whatsapp = request.client.whatsapp_numbers;
                    if(!Array.isArray(whatsapp)) whatsapp = whatsapp.split(",");
                    for(let i = 0; i < whatsapp.length; i++) {
                        let spanElement = document.createElement("span");
                        spanElement.onclick = () => openWhatsapp(whatsapp[i]);
                        spanElement.innerHTML = `
                            <svg viewBox="0 0 418.135 418.135">
                                <g>
                                    <path fill="inherit" d="M198.929.242C88.5 5.5 1.356 97.466 1.691 208.02c.102 33.672 8.231 65.454 22.571 93.536L2.245 408.429c-1.191 5.781 4.023 10.843 9.766 9.483l104.723-24.811c26.905 13.402 57.125 21.143 89.108 21.631 112.869 1.724 206.982-87.897 210.5-200.724C420.113 93.065 320.295-5.538 198.929.242zm124.957 321.955c-30.669 30.669-71.446 47.559-114.818 47.559-25.396 0-49.71-5.698-72.269-16.935l-14.584-7.265-64.206 15.212 13.515-65.607-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713 0-43.373 16.89-84.149 47.559-114.819 30.395-30.395 71.837-47.56 114.822-47.56 43.372.001 84.147 16.891 114.816 47.559 30.669 30.669 47.559 71.445 47.56 114.817-.001 42.986-17.166 84.428-47.561 114.822z"></path>
                                    <path fill="inherit" d="m309.712 252.351-40.169-11.534a14.971 14.971 0 0 0-14.816 3.903l-9.823 10.008c-4.142 4.22-10.427 5.576-15.909 3.358-19.002-7.69-58.974-43.23-69.182-61.007-2.945-5.128-2.458-11.539 1.158-16.218l8.576-11.095a14.97 14.97 0 0 0 1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356-11.211 9.482-24.513 23.891-26.13 39.854-2.851 28.144 9.219 63.622 54.862 106.222 52.73 49.215 94.956 55.717 122.449 49.057 15.594-3.777 28.056-18.919 35.921-31.317 5.362-8.453 1.128-19.679-8.494-22.442z"></path>
                                </g>
                            </svg> ${whatsapp[i]}`;
                        rowWhatsapp.push(spanElement);
                    }
                    row.innerHTML = `
                        <td class="name"><div class="flex"><div class="company-icon"><img src="/images/dashboard/company_icons/company${randomIconNumber}.png" alt="company icon"></div><span>${request.client.name}</span></div></td>
                        <td class="company-size">${request.client.company_size}</td>
                        <td class="requires"><div class="flex">${rowBusiness}</div></td>
                        <td class="contact"><div class="flex column-flex">${rowContacts}</div></td>
                        <td class="whatsapp"><div class="flex column-flex"></div></td>
                    `;
                    rowWhatsapp.forEach(span => row.querySelector(".whatsapp > .flex").appendChild(span));
                    elementBody.appendChild(row);
                }
            }
        }
        if(active) {
            const elementButton = document.querySelector(".container .left .data-container .header .choices .row .choice#all-requests");
            const otherButtons = document.querySelectorAll(".container .left .data-container .header .choices .row .choice");
            for (let i = 0; i < otherButtons.length; i++) {
                otherButtons[i].classList.remove("active");
            }
            elementButton.classList.add("active");
            const element = document.querySelector(".container .left .data-container .requests-data .con > .all-requests");
            const otherElements = document.querySelectorAll(".container .left .data-container .requests-data .data-set");
            for (let i = 0; i < otherElements.length; i++) {
                otherElements[i].classList.remove("active");
            }
            element.classList.add("active");
        }
    
    }
    
    async function setAllClients(active, allClients) {
        if(allClients){
    
            if (allClients?.message != "success") return;
            let clients = allClients?.data || [];
            if(!Array.isArray(clients)) clients = [clients];
            let compare = areArraysEqual(clients, previousAllClients);
            if(compare) return;
            previousAllClients = clients;
            const element = document.querySelector(".container .left .data-container .requests-data .con > .clients table thead");
            const elementBody = document.querySelector(".container .left .data-container .requests-data .con > .clients table tbody");
            element.innerHTML = "";
            element.innerHTML = `
                <tr class="data-header">
                    <th class="name">company name</th>
                    <th class="company-size">company size</th>
                    <th class="contact">contact numbers</th>
                    <th class="whatsapp">whatsapp numbers</th>
                </tr>
            `;
            elementBody.innerHTML = "";
            if(clients[0]?.id) {
                for (let i = 0; i < clients.length; i++) {
                    const client = clients[i];
                    const row = document.createElement("tr");
                    row.className = "data-content";
                    row.id = client.id;
                    let randomIconNumber = Math.floor(Math.random() * 6) + 1;
                    let rowContacts = "";
                    let contacts = client.contact_numbers;
                    if(!Array.isArray(contacts)) contacts = contacts.split(",");
                    for(let i = 0; i < contacts.length; i++) {
                        rowContacts += `<span> <svg viewBox="0 0 100 100"><path d="M92.134 66.144c3.468.867 5.662 4.054 5.301 7.691l-1.088 11.433c-.582 9.684-7.217 13.406-15.623 11.914C39.212 92.105 7.886 60.824 2.796 19.254.416 2.16 14.201 3.904 26.143 2.544c3.66-.385 6.817 1.826 7.684 5.293l2.995 11.908c.845 3.881 3.092 8.549.107 12.343l-5.046 8.587c-1.024 1.456-1.21 3.133-.553 4.512 4.988 10.444 12.993 18.54 23.248 23.564 1.356.68 3.062.507 4.385-.44l9.047-5.353c3.689-2.88 8.42-.628 12.252.197z"></path></svg> ${contacts[i]}</span>`;
                    }
                    let rowWhatsapp = [];
                    let whatsapp = client.whatsapp_numbers;
                    if(!Array.isArray(whatsapp)) whatsapp = whatsapp.split(",");
                    for(let i = 0; i < whatsapp.length; i++) {
                        let spanElement = document.createElement("span");
                        spanElement.onclick = () => openWhatsapp(whatsapp[i]);
                        spanElement.innerHTML = `
                            <svg viewBox="0 0 418.135 418.135">
                                <g>
                                    <path fill="inherit" d="M198.929.242C88.5 5.5 1.356 97.466 1.691 208.02c.102 33.672 8.231 65.454 22.571 93.536L2.245 408.429c-1.191 5.781 4.023 10.843 9.766 9.483l104.723-24.811c26.905 13.402 57.125 21.143 89.108 21.631 112.869 1.724 206.982-87.897 210.5-200.724C420.113 93.065 320.295-5.538 198.929.242zm124.957 321.955c-30.669 30.669-71.446 47.559-114.818 47.559-25.396 0-49.71-5.698-72.269-16.935l-14.584-7.265-64.206 15.212 13.515-65.607-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713 0-43.373 16.89-84.149 47.559-114.819 30.395-30.395 71.837-47.56 114.822-47.56 43.372.001 84.147 16.891 114.816 47.559 30.669 30.669 47.559 71.445 47.56 114.817-.001 42.986-17.166 84.428-47.561 114.822z"></path>
                                    <path fill="inherit" d="m309.712 252.351-40.169-11.534a14.971 14.971 0 0 0-14.816 3.903l-9.823 10.008c-4.142 4.22-10.427 5.576-15.909 3.358-19.002-7.69-58.974-43.23-69.182-61.007-2.945-5.128-2.458-11.539 1.158-16.218l8.576-11.095a14.97 14.97 0 0 0 1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356-11.211 9.482-24.513 23.891-26.13 39.854-2.851 28.144 9.219 63.622 54.862 106.222 52.73 49.215 94.956 55.717 122.449 49.057 15.594-3.777 28.056-18.919 35.921-31.317 5.362-8.453 1.128-19.679-8.494-22.442z"></path>
                                </g>
                            </svg> ${whatsapp[i]}`;
                        rowWhatsapp.push(spanElement);
                    }
                    row.innerHTML = `
                        <td class="name"><div class="flex"><div class="company-icon"><img src="/images/dashboard/company_icons/company${randomIconNumber}.png" alt="company icon"></div><span>${client.name}</span></div></td>
                        <td class="company-size">${client.company_size}</td>
                        <td class="contact"><div class="flex column-flex">${rowContacts}</div></td>
                        <td class="whatsapp"><div class="flex column-flex"></div></td>
                    `;
                    rowWhatsapp.forEach(span => row.querySelector(".whatsapp > .flex").appendChild(span));
                    elementBody.appendChild(row);
                }
            }
        }
        if(active) {
            const elementButton = document.querySelector(".container .left .data-container .header .choices .row .choice#clients");
            const otherButtons = document.querySelectorAll(".container .left .data-container .header .choices .row .choice");
            for (let i = 0; i < otherButtons.length; i++) {
                otherButtons[i].classList.remove("active");
            }
            elementButton.classList.add("active");
            const element = document.querySelector(".container .left .data-container .requests-data .con > .clients");
            const otherElements = document.querySelectorAll(".container .left .data-container .requests-data .data-set");
            for (let i = 0; i < otherElements.length; i++) {
                otherElements[i].classList.remove("active");
            }
            element.classList.add("active");
        }
    }

    function selectImage(event) {
        const element = event.currentTarget;
        let elementTarget = event.target;
        let currentTarget = event.target;
        while(!currentTarget.classList.contains('remove') && !currentTarget.classList.contains('download') && !currentTarget.classList.contains('project-image')) {
            currentTarget = currentTarget.parentElement;
        }
        if(currentTarget.classList.contains('remove') || currentTarget.classList.contains('download')) return;
        if(element.classList.contains('selected')) {
            element.classList.remove("selected");
        } else {
            element.classList.add("selected");
        }
        selectedImagesCalc();
    }

    function selectedImagesCalc() {
        const activeGallery = document.querySelector(".container .left .data-container .requests-data > .data-set.active");
        const selectedImages = document.querySelectorAll(".container .left .data-container .requests-data .data-set.active .columns .col .project-image.selected");
        if(!activeGallery || !selectedImages) return;

        if(selectedImages.length == 0) {
            activeGallery.classList.remove("selection");
        } else activeGallery.classList.add("selection");

        const galleryImages = activeGallery.querySelectorAll(".project-image");
        const galleryImagesSelected = activeGallery.querySelectorAll(".project-image.selected");
        const gallerySelectBox = document.querySelector(".container .left .data-container .requests-data > .data-set.active.selection .gallery-header .selected-items .select-all");

        if(galleryImages.length == galleryImagesSelected.length) {
            activeGallery.classList.add("selected-all");
        } else {
            activeGallery.classList.remove("selected-all");
        }

        if(galleryImagesSelected.length == 0) activeGallery.classList.remove("selection");

        const selectedImagesCount = document.querySelector(".container .left .data-container .requests-data > .data-set.active.selection .gallery-header .selected-items .count-container .count");
        if(!selectedImagesCount) return;
        selectedImagesCount.textContent = selectedImages.length;
    }
    
    async function setDesignProjects(active, allImages) {
        if(allImages){
            if (allImages?.message != "success") return;
            let images = allImages?.data || [];
            if(!Array.isArray(images)) images = [images];
            let compare = areArraysEqual(images, previousDesignProjects);
            if(compare) return;
            previousDesignProjects = images;
            const element = document.querySelector(".container .left .data-container .requests-data .data-set.design-projects .columns");
            element.innerHTML = "";
            const col = document.createElement("div");
            col.className = "col col-1";
            document.querySelector(".container .left .data-container .requests-data > .data-set.design-projects .gallery-header .all-items .count").innerHTML = 0;
            if(images[0]?.id){
                document.querySelector(".container .left .data-container .requests-data > .data-set.design-projects .gallery-header .all-items .count").innerHTML = images.length;
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    const row = document.createElement("div");
                    row.className = "project-image";
                    row.id = image.id;
                    row.onclick = selectImage;
                    row.innerHTML = `
                        <img src="http://localhost:4000/src/files/design_projects/${image.file}" alt="GAD design project" onerror="imageError(event)">
                        <div class="tools"></div>
                    `;

                    const removeElement = document.createElement("div");
                    removeElement.className = "remove";
                    removeElement.onclick = (event) => allScripts.removeSelected(event, "design", [row]);
                    removeElement.innerHTML = `<svg viewBox="0 0 512 512"><path d="M85.1 464c1.9 29.9 21.7 48 52 48h235.6c34.5 0 52.7-17.7 54.8-52 5.6-92.4 19.2-317.7 20.2-336.1H64.9c0 4 13.4 231.9 20.2 340.1zM447.3 32.9c-27.1-.2-54.1-.4-81.1.1-1.6-18.6-17.2-33-35.9-33H181.7c-18.7 0-34.3 14.4-35.8 33-27.8-.5-55.7-.3-83.5-.1-14.6.2-25.2 8.3-28.7 21.1-6.1 22.3 7.4 40.7 30.5 40.8 64.1.2 128.1.1 192.1.1h190.8c20.7 0 32.6-11.6 32.7-30.9s-11.9-31-32.5-31.1z"></path></svg>`;

                    const downloadElement = document.createElement("div");
                    downloadElement.className = "download";
                    downloadElement.onclick = (event) => allScripts.downloadImage(event);
                    downloadElement.innerHTML = `<svg viewBox="0 0 512 512"><path d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32zM233.373 378.628c6.249 6.249 14.437 9.373 22.627 9.373 8.188 0 16.38-3.125 22.627-9.373l113.378-113.377c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L288 278.746V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v246.746l-58.75-58.75c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255z"></path></svg>`;

                    const selectElement = document.createElement("div");
                    selectElement.className = "select";
                    selectElement.innerHTML = `<svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z" fill="inherit"></path></svg>`;

                    row.querySelector(".tools").appendChild(removeElement);
                    row.querySelector(".tools").appendChild(downloadElement);
                    row.querySelector(".tools").appendChild(selectElement);
                    col.appendChild(row);
                }
            }
            element.append(col);
        }
        setTimeout(() => {
            resetGallery(document.querySelector(".container .left .data-container .requests-data .data-set.design-projects"), true);
        }, 0);
        if(active) {
            const elementButton = document.querySelector(".container .left .data-container .header .choices .row .choice#design-projects");
            const otherButtons = document.querySelectorAll(".container .left .data-container .header .choices .row .choice");
            for (let i = 0; i < otherButtons.length; i++) {
                otherButtons[i].classList.remove("active");
            }
            elementButton.classList.add("active");
            const element = document.querySelector(".container .left .data-container .requests-data .data-set.design-projects");
            const otherElements = document.querySelectorAll(".container .left .data-container .requests-data .data-set");
            for (let i = 0; i < otherElements.length; i++) {
                otherElements[i].classList.remove("active");
            }
            element.classList.add("active");
        }
    }
    
    async function setProgrammingProjects(active, allImages) {
        if(allImages){
            if (allImages?.message != "success") return;
            let images = allImages?.data || [];
            if(!Array.isArray(images)) images = [images];
            let compare = areArraysEqual(images, previousProgrammingProjects);
            if(compare) return;
            previousProgrammingProjects = images;
            const element = document.querySelector(".container .left .data-container .requests-data .data-set.programming-projects .columns");
            element.innerHTML = "";
            const col = document.createElement("div");
            col.className = "col col-1";
            document.querySelector(".container .left .data-container .requests-data > .data-set.programming-projects .gallery-header .all-items .count").innerHTML = 0;
            if(images[0]?.id){
                document.querySelector(".container .left .data-container .requests-data > .data-set.programming-projects .gallery-header .all-items .count").innerHTML = images.length;
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    const row = document.createElement("div");
                    row.className = "project-image";
                    row.id = image.id;
                    row.onclick = selectImage;
                    row.innerHTML = `
                        <img src="http://localhost:4000/src/files/programming_projects/${image.file}" alt="GAD programming project" onerror="imageError(event)">
                        <div class="tools"></div>
                    `;

                    const removeElement = document.createElement("div");
                    removeElement.className = "remove";
                    removeElement.onclick = (event) => allScripts.removeSelected(event, "programming", [row]);
                    removeElement.innerHTML = `<svg viewBox="0 0 512 512"><path d="M85.1 464c1.9 29.9 21.7 48 52 48h235.6c34.5 0 52.7-17.7 54.8-52 5.6-92.4 19.2-317.7 20.2-336.1H64.9c0 4 13.4 231.9 20.2 340.1zM447.3 32.9c-27.1-.2-54.1-.4-81.1.1-1.6-18.6-17.2-33-35.9-33H181.7c-18.7 0-34.3 14.4-35.8 33-27.8-.5-55.7-.3-83.5-.1-14.6.2-25.2 8.3-28.7 21.1-6.1 22.3 7.4 40.7 30.5 40.8 64.1.2 128.1.1 192.1.1h190.8c20.7 0 32.6-11.6 32.7-30.9s-11.9-31-32.5-31.1z"></path></svg>`;

                    const downloadElement = document.createElement("div");
                    downloadElement.className = "download";
                    downloadElement.onclick = (event) => allScripts.downloadImage(event);
                    downloadElement.innerHTML = `<svg viewBox="0 0 512 512"><path d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32zM233.373 378.628c6.249 6.249 14.437 9.373 22.627 9.373 8.188 0 16.38-3.125 22.627-9.373l113.378-113.377c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L288 278.746V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v246.746l-58.75-58.75c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255z"></path></svg>`;

                    const selectElement = document.createElement("div");
                    selectElement.className = "select";
                    selectElement.innerHTML = `<svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z" fill="inherit"></path></svg>`;

                    row.querySelector(".tools").appendChild(removeElement);
                    row.querySelector(".tools").appendChild(downloadElement);
                    row.querySelector(".tools").appendChild(selectElement);
                    col.appendChild(row);
                }
            }
            element.append(col);
        }
        setTimeout(() => {
            resetGallery(document.querySelector(".container .left .data-container .requests-data .data-set.programming-projects"), true);
        }, 0);
        if(active) {
            const elementButton = document.querySelector(".container .left .data-container .header .choices .row .choice#programming-projects");
            const otherButtons = document.querySelectorAll(".container .left .data-container .header .choices .row .choice");
            for (let i = 0; i < otherButtons.length; i++) {
                otherButtons[i].classList.remove("active");
            }
            elementButton.classList.add("active");
            const element = document.querySelector(".container .left .data-container .requests-data .data-set.programming-projects");
            const otherElements = document.querySelectorAll(".container .left .data-container .requests-data .data-set");
            for (let i = 0; i < otherElements.length; i++) {
                otherElements[i].classList.remove("active");
            }
            element.classList.add("active");
        }
    }
    
    async function setPrintingProjects(active, allImages) {
        if(allImages){
            if (allImages?.message != "success") return;
            let images = allImages?.data || [];
            if(!Array.isArray(images)) images = [images];
            let compare = areArraysEqual(images, previousPrintingProjects);
            if(compare) return;
            previousPrintingProjects = images;
            const element = document.querySelector(".container .left .data-container .requests-data .data-set.printing-projects .columns");
            element.innerHTML = "";
            const col = document.createElement("div");
            col.className = "col col-1";
            document.querySelector(".container .left .data-container .requests-data > .data-set.printing-projects .gallery-header .all-items .count").innerHTML = 0;
            if(images[0]?.id){
                document.querySelector(".container .left .data-container .requests-data > .data-set.printing-projects .gallery-header .all-items .count").innerHTML = images.length;
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    const row = document.createElement("div");
                    row.className = "project-image";
                    row.id = image.id;
                    row.onclick = selectImage;
                    row.innerHTML = `
                        <img src="http://localhost:4000/src/files/printing_projects/${image.file}" alt="GAD printing project" onerror="imageError(event)">
                        <div class="tools"></div>
                    `;

                    const removeElement = document.createElement("div");
                    removeElement.className = "remove";
                    removeElement.onclick = (event) => allScripts.removeSelected(event, "printing", [row]);
                    removeElement.innerHTML = `<svg viewBox="0 0 512 512"><path d="M85.1 464c1.9 29.9 21.7 48 52 48h235.6c34.5 0 52.7-17.7 54.8-52 5.6-92.4 19.2-317.7 20.2-336.1H64.9c0 4 13.4 231.9 20.2 340.1zM447.3 32.9c-27.1-.2-54.1-.4-81.1.1-1.6-18.6-17.2-33-35.9-33H181.7c-18.7 0-34.3 14.4-35.8 33-27.8-.5-55.7-.3-83.5-.1-14.6.2-25.2 8.3-28.7 21.1-6.1 22.3 7.4 40.7 30.5 40.8 64.1.2 128.1.1 192.1.1h190.8c20.7 0 32.6-11.6 32.7-30.9s-11.9-31-32.5-31.1z"></path></svg>`;

                    const downloadElement = document.createElement("div");
                    downloadElement.className = "download";
                    downloadElement.onclick = (event) => allScripts.downloadImage(event);
                    downloadElement.innerHTML = `<svg viewBox="0 0 512 512"><path d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32zM233.373 378.628c6.249 6.249 14.437 9.373 22.627 9.373 8.188 0 16.38-3.125 22.627-9.373l113.378-113.377c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L288 278.746V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v246.746l-58.75-58.75c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255z"></path></svg>`;

                    const selectElement = document.createElement("div");
                    selectElement.className = "select";
                    selectElement.innerHTML = `<svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z" fill="inherit"></path></svg>`;

                    row.querySelector(".tools").appendChild(removeElement);
                    row.querySelector(".tools").appendChild(downloadElement);
                    row.querySelector(".tools").appendChild(selectElement);
                    col.appendChild(row);
                }
            }
            element.append(col);
        }
        setTimeout(() => {
            resetGallery(document.querySelector(".container .left .data-container .requests-data .data-set.printing-projects"), true);
        }, 0);
        if(active) {
            const elementButton = document.querySelector(".container .left .data-container .header .choices .row .choice#printing-projects");
            const otherButtons = document.querySelectorAll(".container .left .data-container .header .choices .row .choice");
            for (let i = 0; i < otherButtons.length; i++) {
                otherButtons[i].classList.remove("active");
            }
            elementButton.classList.add("active");
            const element = document.querySelector(".container .left .data-container .requests-data .data-set.printing-projects");
            const otherElements = document.querySelectorAll(".container .left .data-container .requests-data .data-set");
            for (let i = 0; i < otherElements.length; i++) {
                otherElements[i].classList.remove("active");
            }
            element.classList.add("active");
        }
    }

    async function uploadImages(src, images) {
        try {
            const formData = new FormData();
            for (let i = 0; i < images.length; i++) {
                formData.append('file', images[i]);
            }
            const result = await api.post(`/files/upload/${src}`, formData, {
                "Content-Type": "multipart/form-data"
            });
            console.log('Upload successful:', result);
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    }
    
    document.querySelector(".container .left .data-container .requests-data > .data-set.design-projects .gallery-header .all-tools .upload-images").addEventListener('change', async (event) => {
        const files = event.target?.files;
        console.log("files : ", files);
        if (files.length === 0) return;
        uploadImages("design", files);
    });
    
    document.querySelector(".container .left .data-container .requests-data > .data-set.programming-projects .gallery-header .all-tools .upload-images").addEventListener('change', async (event) => {
        const files = event.target?.files;
        if (files.length === 0) return;
        uploadImages("programming", files);
    });
    
    document.querySelector(".container .left .data-container .requests-data > .data-set.printing-projects .gallery-header .all-tools .upload-images").addEventListener('change', async (event) => {
        const files = event.target?.files;
        if (files.length === 0) return;
        uploadImages("printing", files);
    });

    document.getElementById('add-request-form').addEventListener('submit', async function (e) {

        e.preventDefault();
    
        const CompanyNameElement = document.getElementById('companyName');
        const contactNumber1Element = document.getElementById('phone1');
        const contactNumber2Element = document.getElementById('phone2');
        const whatsappNumberElement = document.getElementById('whatsappNumber');
        const whatsappNumber1Element = document.getElementById('whatsappNumber1');
        const whatsappNumber2Element = document.getElementById('whatsappNumber2');
        const designSrviceElement = document.getElementById('designBusinessRequired');
        const programmingSrviceElement = document.getElementById('programmingBusinessRequired');
        const printingSrviceElement = document.getElementById('printingBusinessRequired');
        const personalCompanySizeElement = document.getElementById('personalCompanySize');
        const smallCompanySizeElement = document.getElementById('smallCompanySize');
        const mediumCompanySizeElement = document.getElementById('mediumCompanySize');
        const largeCompanySizeElement = document.getElementById('largeCompanySize');
        const enterpriseCompanySizeElement = document.getElementById('enterpriseCompanySize');
    
        let companyName = CompanyNameElement?.value?.trim() || '';
        let contactNumbers = [document.getElementById('phone1')?.value?.trim()] || [];
        if(document.getElementById('phone2')?.value?.trim()) contactNumbers.push(document.getElementById('phone2').value.trim());
        let whatsappNumbers = [whatsappNumberElement?.value?.trim()] || [];
        if(whatsappNumber1Element.checked || whatsappNumber2Element.checked){
            whatsappNumbers = [];
            if(whatsappNumber1Element.checked) whatsappNumbers.push(contactNumber1Element?.value?.trim());
            if(whatsappNumber2Element.checked) whatsappNumbers.push(contactNumber2Element?.value?.trim());
        }
    
        let selectedServices = [];
        if(designSrviceElement.checked) selectedServices.push("design");
        if(programmingSrviceElement.checked) selectedServices.push("programming");
        if(printingSrviceElement.checked) selectedServices.push("printing");
    
        let companySize = [];
        if(personalCompanySizeElement.checked) companySize.push("personal");
        if(smallCompanySizeElement.checked) companySize.push("small");
        if(mediumCompanySizeElement.checked) companySize.push("medium");
        if(largeCompanySizeElement.checked) companySize.push("large");
        if(enterpriseCompanySizeElement.checked) companySize.push("enterprise");
    
        let warnsCount = 0;
    
        let CompanyNameElementParent = CompanyNameElement;
        while(!CompanyNameElementParent.classList.contains('field')) {
            CompanyNameElementParent = CompanyNameElementParent.parentElement;
        }
        if(companyName.length == 0) {
            warnsCount++;
            CompanyNameElementParent.querySelector(".warnMessage").classList.add('active');
        }
        else CompanyNameElementParent.querySelector(".warnMessage").classList.remove('active');
    
        let contactNumberElementParent = contactNumber1Element;
        while(!contactNumberElementParent.classList.contains('field')) {
            contactNumberElementParent = contactNumberElementParent.parentElement;
        }
        if(contactNumbers.filter(c => c.length > 0).length == 0) {
            warnsCount++;
            contactNumberElementParent.querySelector(".warnMessage").classList.add('active');
        }
        else contactNumberElementParent.querySelector(".warnMessage").classList.remove('active');
        
        let whatsappNumberElementParent = whatsappNumberElement;
        while(!whatsappNumberElementParent.classList.contains('field')) {
            whatsappNumberElementParent = whatsappNumberElementParent.parentElement;
        }
        if(whatsappNumbers.filter(w => w.length > 0).length == 0) {
            warnsCount++;
            whatsappNumberElementParent.querySelector(".warnMessage").classList.add('active');
        }
        else whatsappNumberElementParent.querySelector(".warnMessage").classList.remove('active');
        
        let requiredServiceElementParent = designSrviceElement;
        while(!requiredServiceElementParent.classList.contains('field')) {
            requiredServiceElementParent = requiredServiceElementParent.parentElement;
        }
        if(selectedServices.length == 0) {
            warnsCount++;
            requiredServiceElementParent.querySelector(".warnMessage").classList.add('active');
        }
        else requiredServiceElementParent.querySelector(".warnMessage").classList.remove('active');
    
        let companySizeElementParent = personalCompanySizeElement;
        while(!companySizeElementParent.classList.contains('field')) {
            companySizeElementParent = companySizeElementParent.parentElement;
        }
        if(companySize.length == 0) {
            warnsCount++;
            companySizeElementParent.querySelector(".warnMessage").classList.add('active');
        }
        else companySizeElementParent.querySelector(".warnMessage").classList.remove('active');
    
        let formData = {
            "name": companyName,
            "contact_numbers": contactNumbers,
            "whatsapp_numbers": whatsappNumbers,
            "business_requires": selectedServices,
            "company_size": companySize,
            "action": 1
        }
    
        console.log("form data : ", formData);
        if(warnsCount == 0) {
            console.log("We are ready! ");
            let result = await api.post(`/requests`, formData);
            console.log(result);
            document.querySelector('.window-container').classList.remove('active', 'add');
        }
    
    });

    async function approveRequest(event) {
        let element = event.target;
        while(!element.classList.contains("data-content")) {
            element = element.parentElement;
        }
        let requestID = element.getAttribute("id");
        if(requestID) {
            if(requestID.length == 0) return;
            element.remove();
            const result = await api.post(`/requests/${requestID}/approve`);
            console.log("approve result : ", result);
        }
    }
    
    async function deniedRequest(event) {
        let element = event.target;
        while(!element.classList.contains("data-content")) {
            element = element.parentElement;
        }
        let requestID = element.getAttribute("id");
        if(requestID) {
            if(requestID.length == 0) return;
            element.remove();
            const result = await api.post(`/requests/${requestID}/denied`);
            console.log("denied result : ", result);
        }
    }

    function logout() {
        api.logout();
        window.location.href = "/dashboard/login";
    }

    document.querySelector("nav button").addEventListener('click', logout);

    init();
    //setInterval(init, 5000);

    document.getElementById("pending-requests").addEventListener('click', () => { setPendingRequests(true) });
    document.getElementById("all-requests").addEventListener('click', () => { setAllRequests(true) });
    document.getElementById("clients").addEventListener('click', () => { setAllClients(true) });
    document.getElementById("design-projects").addEventListener('click', () => { setDesignProjects(true) });
    document.getElementById("programming-projects").addEventListener('click', () => { setProgrammingProjects(true) });
    document.getElementById("printing-projects").addEventListener('click', () => { setPrintingProjects(true) });
    
}