const {filter, formatFilters} = require('./helpers');

describe("Result filtration logic)", () => {
    const mockData = [

        {
            "id": 266,
            "first_name": "Cornelius",
            "last_name": "Westbrook",
            "email": "cwestbrook7d@census.gov",
            "country": "Brazil",
            "car_model": "Honda",
            "car_model_year": 2009,
            "car_color": "Yellow",
            "gender": "Male",
            "job_title": "Information Systems Manager",
            "bio": "\"Maecenas tristique",
            "createdAt": "2020-05-28T12:11:36.115Z",
            "updatedAt": "2020-05-28T12:11:36.115Z"
        },
        {
            "id": 711,
            "first_name": "Emanuele",
            "last_name": "Grestye",
            "email": "egrestyejq@cnbc.com",
            "country": "Poland",
            "car_model": "Chevrolet",
            "car_model_year": 2007,
            "car_color": "Violet",
            "gender": "Male",
            "job_title": "Programmer IV",
            "bio": "\"Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros",
            "createdAt": "2020-05-28T12:11:36.122Z",
            "updatedAt": "2020-05-28T12:11:36.122Z"
        },
        {
            "id": 1330,
            "first_name": "Lauritz",
            "last_name": "De La Hay",
            "email": "ldelahay95@netlog.com",
            "country": "Poland",
            "car_model": "Ford",
            "car_model_year": 2008,
            "car_color": "Green",
            "gender": "Male",
            "job_title": "Chemical Engineer",
            "bio": "\"Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero",
            "createdAt": "2020-05-28T12:11:36.134Z",
            "updatedAt": "2020-05-28T12:11:36.134Z"
        },
        {
            "id": 1563,
            "first_name": "Bruno",
            "last_name": "Lindenbluth",
            "email": "blindenbluthfm@economist.com",
            "country": "Brazil",
            "car_model": "Cadillac",
            "car_model_year": 2004,
            "car_color": "Green",
            "gender": "Male",
            "job_title": "Programmer Analyst II",
            "bio": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
            "createdAt": "2020-05-28T12:11:36.139Z",
            "updatedAt": "2020-05-28T12:11:36.139Z"
        },
        {
            "id": 1587,
            "first_name": "Kerby",
            "last_name": "Cribbin",
            "email": "kcribbinga@miibeian.gov.cn",
            "country": "Ireland",
            "car_model": "Chevrolet",
            "car_model_year": 1999,
            "car_color": "Green",
            "gender": "Male",
            "job_title": "Programmer III",
            "bio": "Integer non velit.",
            "createdAt": "2020-05-28T12:11:36.139Z",
            "updatedAt": "2020-05-28T12:11:36.139Z"
        },
        {
            "id": 1596,
            "first_name": "Ax",
            "last_name": "Rowe",
            "email": "arowegj@mysql.com",
            "country": "Peru",
            "car_model": "Chevrolet",
            "car_model_year": 1995,
            "car_color": "Yellow",
            "gender": "Male",
            "job_title": "Pharmacist",
            "bio": "\"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra",
            "createdAt": "2020-05-28T12:11:36.139Z",
            "updatedAt": "2020-05-28T12:11:36.139Z"
        },
        {
            "id": 1648,
            "first_name": "Craggie",
            "last_name": "Hilhouse",
            "email": "chilhousehz@princeton.edu",
            "country": "Ireland",
            "car_model": "Honda",
            "car_model_year": 2005,
            "car_color": "Blue",
            "gender": "Male",
            "job_title": "Human Resources Assistant III",
            "bio": "\"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor",
            "createdAt": "2020-05-28T12:11:36.141Z",
            "updatedAt": "2020-05-28T12:11:36.141Z"
        },
        {
            "id": 1820,
            "first_name": "Ely",
            "last_name": "Camerana",
            "email": "ecameranamr@squarespace.com",
            "country": "Peru",
            "car_model": "Mazda",
            "car_model_year": 2008,
            "car_color": "Blue",
            "gender": "Male",
            "job_title": "VP Sales",
            "bio": "Nunc rhoncus dui vel sem.",
            "createdAt": "2020-05-28T12:11:36.144Z",
            "updatedAt": "2020-05-28T12:11:36.144Z"
        },
        {
            "id": 1821,
            "first_name": "Reinaldo",
            "last_name": "Allward",
            "email": "rallwardms@state.gov",
            "country": "Brazil",
            "car_model": "Chevrolet",
            "car_model_year": 2003,
            "car_color": "Violet",
            "gender": "Male",
            "job_title": "Programmer Analyst II",
            "bio": "\"Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio",
            "createdAt": "2020-05-28T12:11:36.144Z",
            "updatedAt": "2020-05-28T12:11:36.144Z"
        },
        {
            "id": 2041,
            "first_name": "Artemis",
            "last_name": "Oakland",
            "email": "aoakland14@irs.gov",
            "country": "Niger",
            "car_model": "Volvo",
            "car_model_year": 2002,
            "car_color": "Violet",
            "gender": "Male",
            "job_title": "Safety Technician II",
            "bio": "Vivamus vestibulum sagittis sapien.",
            "createdAt": "2020-05-28T12:11:36.111Z",
            "updatedAt": "2020-05-28T12:11:36.111Z"
        },
        {
            "id": 2123,
            "first_name": "Ramsay",
            "last_name": "Hulburt",
            "email": "rhulburt3e@fotki.com",
            "country": "Peru",
            "car_model": "Volkswagen",
            "car_model_year": 1999,
            "car_color": "Yellow",
            "gender": "Male",
            "job_title": "Programmer Analyst III",
            "bio": "\"Maecenas tristique",
            "createdAt": "2020-05-28T12:11:36.113Z",
            "updatedAt": "2020-05-28T12:11:36.113Z"
        },
        {
            "id": 2140,
            "first_name": "Jerrold",
            "last_name": "Kaiser",
            "email": "jkaiser3v@163.com",
            "country": "Brazil",
            "car_model": "Honda",
            "car_model_year": 2002,
            "car_color": "Violet",
            "gender": "Male",
            "job_title": "Environmental Specialist",
            "bio": "\"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes",
            "createdAt": "2020-05-28T12:11:36.113Z",
            "updatedAt": "2020-05-28T12:11:36.113Z"
        },
        {
            "id": 2266,
            "first_name": "Cornelius",
            "last_name": "Westbrook",
            "email": "cwestbrook7d@census.gov",
            "country": "Brazil",
            "car_model": "Honda",
            "car_model_year": 2009,
            "car_color": "Yellow",
            "gender": "Male",
            "job_title": "Information Systems Manager",
            "bio": "\"Maecenas tristique",
            "createdAt": "2020-05-28T12:11:36.115Z",
            "updatedAt": "2020-05-28T12:11:36.115Z"
        },
        {
            "id": 2711,
            "first_name": "Emanuele",
            "last_name": "Grestye",
            "email": "egrestyejq@cnbc.com",
            "country": "Poland",
            "car_model": "Chevrolet",
            "car_model_year": 2007,
            "car_color": "Violet",
            "gender": "Male",
            "job_title": "Programmer IV",
            "bio": "\"Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros",
            "createdAt": "2020-05-28T12:11:36.122Z",
            "updatedAt": "2020-05-28T12:11:36.122Z"
        },
        {
            "id": 3330,
            "first_name": "Lauritz",
            "last_name": "De La Hay",
            "email": "ldelahay95@netlog.com",
            "country": "Poland",
            "car_model": "Ford",
            "car_model_year": 2008,
            "car_color": "Green",
            "gender": "Male",
            "job_title": "Chemical Engineer",
            "bio": "\"Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero",
            "createdAt": "2020-05-28T12:11:36.134Z",
            "updatedAt": "2020-05-28T12:11:36.134Z"
        },
        {
            "id": 3563,
            "first_name": "Bruno",
            "last_name": "Lindenbluth",
            "email": "blindenbluthfm@economist.com",
            "country": "Brazil",
            "car_model": "Cadillac",
            "car_model_year": 2004,
            "car_color": "Green",
            "gender": "Male",
            "job_title": "Programmer Analyst II",
            "bio": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
            "createdAt": "2020-05-28T12:11:36.139Z",
            "updatedAt": "2020-05-28T12:11:36.139Z"
        },
        {
            "id": 3587,
            "first_name": "Kerby",
            "last_name": "Cribbin",
            "email": "kcribbinga@miibeian.gov.cn",
            "country": "Ireland",
            "car_model": "Chevrolet",
            "car_model_year": 1999,
            "car_color": "Green",
            "gender": "Male",
            "job_title": "Programmer III",
            "bio": "Integer non velit.",
            "createdAt": "2020-05-28T12:11:36.139Z",
            "updatedAt": "2020-05-28T12:11:36.139Z"
        }
    ]
    it("should produce a filtered list based on the filter parameters: filter(data, filterParams)", () => {
        const filterList1 = {
            "start_year": 1991,
	        "end_year": 2009,
	        "gender": "male",
	        "countries": ["Brazil", "Ireland", "Egypt", "Poland", "Niger", "Greece", "Peru"],
	        "colors": ["Violet", "Yellow", "Blue"]
        }
        const filterList2 = {
            "id": 3,
	        "start_year": 2001,
	        "end_year": 2009,
	        "gender": "female",
	        "colors": ["Red", "Green", "Orange", "Mauv"]
        }
        expect(filter(mockData, filterList1).length).toEqual(11)
        expect(filter(mockData, filterList2).length).toEqual(0)
    })

    it("formatFilter(filterParams) should produce an object that corresponds with DB schema", () => {
        const filterList1 = {
            "start_year": 1991,
	        "end_year": 2009,
	        "gender": "male",
	        "countries": ["Brazil", "Ireland", "Egypt", "Poland", "Niger", "Greece", "Peru"],
	        "colors": ["Violet", "Yellow", "Blue"]
        }
        const filterList2 = {
            "id": 3,
	        "start_year": 2001,
	        "end_year": 2009,
	        "gender": "female",
	        "colors": ["Red", "Green", "Orange", "Mauv"]
        }
        const formattedFilter1 = formatFilters(filterList1);
        const formattedFilter2 = formatFilters(filterList2);
        expect(formattedFilter1["car_model_year"].length).toEqual(19);
        expect(formattedFilter1["car_color"].length).toEqual(3);
        expect(formattedFilter1["country"].length).toEqual(7);
        expect(formattedFilter2["car_color"].length).toEqual(4);
        expect(formattedFilter2["car_model_year"].length).toEqual(9);
    })
})