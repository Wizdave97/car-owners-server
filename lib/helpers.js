module.exports = {
    filter(data, filters) {
        const filteredData = data.filter( obj => {
            const check = {}
            if (filters.hasOwnProperty("start_year") && filters["start_year"])
            {
                if (+obj["car_model_year"] >= filters["start_year"]) check.startYearCheck = true;
                else check.startYearCheck = false;
            }
            if (filters.hasOwnProperty("end_year") && filters["end_year"])
            {
                if (+obj["car_model_year"] <= filters["end_year"]) check.endYearCheck = true;
                else check.endYearCheck = false;
            }
            if (filters.hasOwnProperty("gender") && filters["gender"])
            {
                if (obj["gender"].toLowerCase().trim() === filters["gender"].toLowerCase().trim()) 
                {
                    check.genderCheck = true;
                }
                else check.genderCheck = false;
            }
            if (filters.hasOwnProperty("colors") && filters["colors"])
            {
                if (filters["colors"].includes(obj["car_color"])) check.colorsCheck = true;
                else check.colorsCheck = false;
            }
            if (filters.hasOwnProperty("countries") && filters["countries"])
            {
                if (filters["countries"].includes(obj["country"])) check.countryCheck = true;
                else check.countryCheck = false;
            }
            const finalCheck = Object.values(check).reduce((final = true, val) => {
                return final && val;
            })
            return finalCheck;
        })
        return filteredData;
    },

    formatFilters(filters) {
        const formattedFilters = {}
        if (filters.hasOwnProperty("start_year") && filters["start_year"] && filters.hasOwnProperty("end_year") && filters["end_year"])
        {
            formattedFilters["car_model_year"] = [];
            for (let i = filters["start_year"]; i <= filters["end_year"]; i++)
            {
                formattedFilters["car_model_year"].push(String(i));
            }
        }
        if (filters.hasOwnProperty("gender") && filters["gender"])
        {
            formattedFilters["gender"] = filters["gender"][0].toUpperCase() + filters["gender"].slice(1);
        }
        if (filters.hasOwnProperty("colors") && filters["colors"])
        {
            formattedFilters["car_color"] = filters["colors"];
        }
        if (filters.hasOwnProperty("countries") && filters["countries"])
        {
            formattedFilters["country"] = filters["countries"];
        }
        return formattedFilters;
    }
}