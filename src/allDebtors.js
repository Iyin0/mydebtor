const all_debtors = [

    {
        id: 1,
        name: "Mr. Alex Joe",
        email: "Alexjoe2018@gmail.com",
        gender: "Male",
        ward: "John Doe",
        number: "+234-9045-3676-09",
        owes: "70,000",
        date: "27/08/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session, with tax inclusive",
        status: "Successful",
        class: "Basic Five (5)",
        detail: "Contention Successful. Debt fully paid"
    },

    {
        id: 2,
        name: "Mr. Emeka John",
        email: "Emekajohn70@gmail.com",
        gender: "Male",
        ward: "Steven John",
        number: "+234-9045-3676-09",
        owes: "35,000",
        date: "27/08/2022",
        description: "Second term outstanding feeding fees for 2019/2020 academic session, with tax inclusive",
        status: "Failed",
        class: "Basic Nine (9)",
        detail: "Contention Failed. Documents provided does not cover this debt"
    },

    {
        id: 3,
        name: "Mr. Onome Chinyere",
        email: "Onomechinyere@gmail.com",
        gender: "Female",
        ward: "Blessing Chinyere",
        number: "+234-9045-3676-09",
        owes: "70,000",
        date: "27/08/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session, with tax inclusive",
        status: "Logged",
        class: "Basic Four (4)",
        detail: "Logged"
    },

    {
        id: 4,
        name: "Mrs. Godwin Oloruntoyin",
        email: "Godwinoloruntoyin@gmail.com",
        gender: "Female",
        ward: "Lydia Oloruntoyin",
        number: "+234-9045-3676-09",
        owes: "170,000",
        date: "27/08/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session, hostel fees, with tax inclusive",
        status: "None",
        class: "Basic Five (5)",
        detail: ""
    },

    {
        id: 5,
        name: "Mrs. Godwin Oloruntoyin",
        email: "Godwinoloruntoyin@gmail.com",
        gender: "Male",
        ward: "Dare Olorintoyin",
        number: "+234-9045-3676-09",
        owes: "170,000",
        date: "27/08/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session, hostel fees, with tax inclusive",
        status: "Successful",
        class: "Basic Seven (7)",
        detail: "Contention Successful. Debt fully paid"
    },

    {
        id: 6,
        name: "Mr. Jacobs Beckly",
        email: "Jacobsbeckly@gmail.com",
        gender: "Male",
        ward: "John Beckly",
        number: "+234-9045-3676-09",
        owes: "35,000",
        date: "27/08/2022",
        description: "First term outstanding feeding fees for 2019/2020 academic session, with tax inclusive",
        status: "Failed",
        class: "Basic Seven (7)",
        detail: "Contention Failed. Documents provided does not cover this debt"
    },

    {
        id: 7,
        name: "Miss Tompson Ebuka",
        email: "Tompsonebuka@gmail.com",
        gender: "Male",
        ward: "Jonathan Goodness",
        number: "+234-9045-3676-09",
        owes: "70,000",
        date: "27/08/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session, with tax inclusive ",
        status: "Logged",
        class: "Basic Three (3)",
        detail: "Logged"
    },

    {
        id: 8,
        name: "Mr. Lekan Dami",
        email: "Lekandami@gmail.com",
        gender: "Female",
        ward: "Sola Dami",
        number: "+234-9045-3676-09",
        owes: "25,000",
        date: "27/08/2022",
        description: "First and second term outstanding stationary and books fees for 2019/2020 academic session, with tax inclusive",
        status: "None",
        class: "Basic Seven (7)",
        detail: ""
    },

    {
        id: 9,
        name: "Mr. Lekan Dami",
        email: "Lekandami@gmail.com",
        gender: "Male",
        ward: "James Dami",
        number: "+234-9045-3676-09",
        owes: "25,000",
        date: "27/08/2022",
        description: "First and second term outstanding stationary and books fees for 2019/2020 academic session, with tax inclusive",
        status: "Successful",
        class: "Basic Three (3)",
        detail: "Contention Successful. Debt fully paid"
    },

    {
        id: 10,
        name: "Mr. Lekan Dami",
        email: "Lekandami@gmail.com",
        gender: "Male",
        ward: "Peter Dami",
        number: "+234-9045-3676-09",
        owes: "25,000",
        date: "27/08/2022",
        description: "First and second term outstanding stationary and books fees for 2019/2020 academic session, with tax inclusive",
        status: "Failed",
        class: "Basic Six (6)",
        detail: "Contention Failed. Documents provided does not cover this debt"
    },

    {
        id: 11,
        name: "Mr. Alex Johnson",
        email: "Alexjohnson2018@gmail.com",
        gender: "Male",
        ward: "John Johnson",
        number: "+234-9045-3676-09",
        owes: "70,000",
        date: "27/08/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session, with tax inclusive",
        status: "Logged",
        class: "Basic Two (2)",
        detail: "Logged"
    },

    {
        id: 12,
        name: "Mr. Emeka Jude",
        email: "Emekajude70@gmail.com",
        gender: "Male",
        ward: "Steven Jude",
        number: "+234-9045-3676-09",
        owes: "35,000",
        date: "27/08/2022",
        description: "Second term outstanding feeding fees for 2019/2020 academic session, with tax inclusive",
        status: "None",
        class: "Basic One (1)",
        detail: ""
    },

    {
        id: 13,
        name: "Mr. Onome Anumasahun",
        email: "Onomeanumasahun@gmail.com",
        gender: "Female",
        ward: "Blessing Anumasahun",
        number: "+234-9045-3676-09",
        owes: "70,000",
        date: "27/08/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session, with tax inclusive",
        status: "Successful",
        class: "Basic Six (6)",
        detail: "Contention Successful. Debt fully paid"
    },

    {
        id: 14,
        name: "Mrs. Goodness Oloruntoyin",
        email: "Goodnessoloruntoyin@gmail.com",
        gender: "Female",
        ward: "James Oloruntoyin",
        number: "+234-9045-3676-09",
        owes: "170,000",
        date: "27/08/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session, hostel fees, with tax inclusive",
        status: "Failed",
        class: "Basic Eight (8)",
        detail: "Contention Failed. Documents provided does not cover this debt"
    },

    {
        id: 15,
        name: "Mrs. Goodness Oloruntoyin",
        email: "Goodnessoloruntoyin@gmail.com",
        gender: "Male",
        ward: "Deborah Olorintoyin",
        number: "+234-9045-3676-09",
        owes: "170,000",
        date: "27/08/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session, hostel fees, with tax inclusive",
        status: "Logged",
        class: "Basic Six (6)",
        detail: "Logged"
    },

    {
        id: 16,
        name: "Mr. Jacobs Samuel",
        email: "Jacobssamuel@gmail.com",
        gender: "Male",
        ward: "John Samuel",
        number: "+234-9045-3676-09",
        owes: "35,000",
        date: "27/08/2022",
        description: "First term outstanding feeding fees for 2019/2020 academic session, with tax inclusive",
        status: "None",
        class: "Basic Three (3)",
        detail: ""
    },

    {
        id: 17,
        name: "Miss Tompson Aina",
        email: "Tompsonebuka@gmail.com",
        gender: "Male",
        ward: "Jonathan Aina",
        number: "+234-9045-3676-09",
        owes: "70,000",
        date: "27/08/2022",
        description: "First and second term outstanding feeding fees for 2019/2020 academic session, with tax inclusive ",
        status: "Successful",
        class: "Basic One (1)",
        detail: "Contention Successful. Debt fully paid"
    },

    {
        id: 18,
        name: "Mrs. Emma Damiduro",
        email: "Emmadamiduro@gmail.com",
        gender: "Female",
        ward: "Sola Damiduro",
        number: "+234-9045-3676-09",
        owes: "25,000",
        date: "27/08/2022",
        description: "First and second term outstanding stationary and books fees for 2019/2020 academic session, with tax inclusive",
        status: "Failed",
        class: "Basic Two (2)",
        detail: "Contention Failed. Documents provided does not cover this debt"
    },

    {
        id: 19,
        name: "Mrs. Emma Damiduro",
        email: "Emmadamiduro@gmail.com",
        gender: "Male",
        ward: "James Damiduro",
        number: "+234-9045-3676-09",
        owes: "25,000",
        date: "27/08/2022",
        description: "First and second term outstanding stationary and books fees for 2019/2020 academic session, with tax inclusive",
        status: "Logged",
        class: "Basic Nine (9)",
        detail: "Logged"
    },

    {
        id: 20,
        name: "Mrs. Emma Damiduro",
        email: "Emmadamiduro@gmail.com",
        gender: "Male",
        ward: "Peter Damiduro",
        number: "+234-9045-3676-09",
        owes: "25,000",
        date: "27/08/2022",
        description: "First and second term outstanding stationary and books fees for 2019/2020 academic session, with tax inclusive",
        status: "None",
        class: "Basic Four (4)",
        detail: ""
    },

]

export { all_debtors }