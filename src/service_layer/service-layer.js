import axios from 'axios';
class Server {
    axiosOptions = {
        timeout: 10000,
        withCredentials: true,
    };

    ContentHeaders = {
        Json: 'application/json',
        FormData: 'multipart/form-data',
        urlEncoded: 'application/x-www-form-urlencoded; charset=UTF-8',
        Plain: 'text/plain',
    };

    BaseDomain = {
        Api: '',

    };

    loaderService = {};

    constructor() {
        axios.interceptors.response.use((response) => {
            // this.loaderService.hide();
            if (response.data && response.data.status > 300) {
                alert(response.data.message);
            }
            return response;
        }, (error) => {
            // this.loaderService.hide();
            if (error.response && error.response.status === 404) {
                // handle 404 error
            }
           return;
        });
    }
       
    getHeadersByType(headerType, domain, customHeaders) {
        const data = {};
        switch (headerType) {
            case api_service.ContentHeaders.Json:
                {
                    data['Content-Type'] = 'application/json';
                    break;
                }
            case api_service.ContentHeaders.Plain:
                {
                    data['Content-Type'] = 'text/plain';
                    break;
                }
            case api_service.ContentHeaders.FormData:
                {
                    data['Content-Type'] = 'multipart/form-data';
                    break;
                }
            case api_service.ContentHeaders.urlEncoded:
                {
                    data['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
                    //    data['Access-Control-Allow-Origin'] = '*';
                    break;
                }
            default:
                data['Content-Type'] = 'application/json';
                break;
        }

        // data = _.extend({}, data, customHeaders);
        // data['Authorization'] = 'Bearer ' + (store.getState().User.User.Token || '');
        return data;
    }

    post = (data) => {
        if (!data.domain) {
            data.domain = api_service.BaseDomain.Api;
        }
        if (!data.headerType) {
            data.headerType = api_service.ContentHeaders.urlEncoded;
        }
        if (data.showLoader || data.showLoader === undefined) {
            // this.loaderService.show();
        }

        if (data.headerType === api_service.ContentHeaders.urlEncoded) {
            const formData = new FormData();
            const payload = data.payLoad;
            for (const key in payload) {
                if (payload.hasOwnProperty(key)) {
                    if (typeof payload[key] !== 'object') {
                        formData.append(key, payload[key]);
                    } else {
                        formData.append(key, JSON.stringify(payload[key]));

                    }

                }
            }

            data.payLoad = formData;
        }

        return axios.post(data.endPoint,
            data.payLoad, {
                timeout: this.axiosOptions.timeout,
                baseURL: data.domain,
                headers: this.getHeadersByType(data.headerType, data.domain, data.customHeaders),
            });
    }

    put = (data) => {
        if (!data.domain) {
            data.domain = api_service.BaseDomain.Api;
        }
        if (!data.headerType) {
            data.headerType = api_service.ContentHeaders.Json;
        }
        if (data.headerType !== api_service.ContentHeaders.Json) {
            data.payLoad = JSON.stringify(data.payLoad);
        }
        if (data.showLoader || data.showLoader === undefined) {
            // this.loaderService.show();
        }

        return axios.put(data.endPoint,
            data.payLoad, {
                timeout: this.axiosOptions.timeout,
                baseURL: data.domain,
                headers: this.getHeadersByType(data.headerType, data.domain, data.customHeaders),
            });
    }

    delete = (data) => {
        if (!data.domain) {
            data.domain = api_service.BaseDomain.Api;
        }
        if (!data.headerType) {
            data.headerType = api_service.ContentHeaders.Json;
        }

        if (data.showLoader !== false) {
            data.showLoader = true;
        }
        if (data.showLoader || data.showLoader === undefined) {
            // this.loaderService.show();
        }
        return axios.delete(data.endPoint, {
            baseURL: data.domain,
            headers: this.getHeadersByType(data.headerType, data.domain, data.customHeaders),
        });
    }

    get = (data) => {
        if (!data.domain) {
            data.domain = api_service.BaseDomain.Api;
        }
        if (!data.headerType) {
            data.headerType = api_service.ContentHeaders.Json;
        }
        if (data.showLoader || data.showLoader === undefined) {
            // this.loaderService.show();
        }
        return axios.get(data.endPoint, {
            baseURL: data.domain,
            timeout: this.axiosOptions.timeout,
            params: data.payLoad,
            headers: this.getHeadersByType(data.headerType, data.domain, data.customHeaders),
        });
    }
}
export const api_service = new Server();

