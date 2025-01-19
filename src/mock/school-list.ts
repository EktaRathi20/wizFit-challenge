const schoolList = [
    { "id": 1, "name": "Greenfield Academy", "email": "contact@greenfield.com" },
    { "id": 2, "name": "Bright Horizons School", "email": "info@brighthorizons.edu" },
    { "id": 3, "name": "Hilltop High", "email": "admin@hilltophigh.com" },
    { "id": 4, "name": "Maple Leaf Academy", "email": "support@mapleleafacademy.org" },
    { "id": 5, "name": "Riverdale School", "email": "principal@riverdale.edu" },
    { "id": 6, "name": "Springfield Elementary", "email": "springfield@schoolsystem.com" },
    { "id": 7, "name": "Lakeside College", "email": "info@lakesidecollege.com" },
    { "id": 8, "name": "Sunshine High School", "email": "hello@sunshinehigh.edu" },
    { "id": 9, "name": "Silver Valley Academy", "email": "contact@silvervalley.org" },
    { "id": 10, "name": "Pinecrest Academy", "email": "pinecrest@academy.com" },
    { "id": 11, "name": "Mountain View School", "email": "admin@mountainview.org" },
    { "id": 12, "name": "Elmwood Academy", "email": "info@elmwoodacademy.com" },
    { "id": 13, "name": "Golden Gate High", "email": "goldengate@school.edu" },
    { "id": 14, "name": "Cedar Grove School", "email": "contact@cedargrove.org" },
    { "id": 15, "name": "Oak Hill Academy", "email": "support@oakhill.edu" },
    { "id": 16, "name": "Ridgeway College", "email": "hello@ridgewaycollege.com" },
    { "id": 17, "name": "Bluebell High School", "email": "info@bluebellhigh.edu" },
    { "id": 18, "name": "Valley View Academy", "email": "contact@valleyview.edu" },
    { "id": 19, "name": "Redwood High School", "email": "admin@redwoodhigh.com" },
    { "id": 20, "name": "Aspen Valley Academy", "email": "info@aspenvalley.org" }
]

// Pagination and search
const paginateAndSearch = async (params: any) => {
    const { search = '', page = 1, pageSize = 10 } = params;
    const filteredData = schoolList.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );

    const total = filteredData.length;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

    return await { data: paginatedData, total };
};


export default paginateAndSearch;