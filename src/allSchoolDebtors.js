const school_debtors = [

    {
        id: 1,
        name: "First Example School",
        lga: "Oshodi-Isolo",
        state: "Lagos",
        school_id: "FES-OL",
        school_email: "firstexampleschool@gmail.com",
        image: require("./img/Ellipse 5.png"),
        debtors: [
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
    },

    {
        id: 2,
        name: "Second Example School",
        lga: "Abuja Municipal",
        state: "FCT-Abuja",
        school_id: "SES-FCTA",
        school_email: "secondexampleschool@gmail.com",
        image: require("./img/cairo.png"),
        debtors: [
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
    },

    {
        id: 3,
        name: "Third Example School",
        lga: "Nembe",
        state: "Bayelsa",
        school_id: "TES-NB",
        school_email: "thirdexampleschool@gmail.com",
        image: require("./img/cropped-School-Badge 1.png"),
        debtors: [
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
    },

    {
        id: 4,
        name: "Fourth Example School",
        lga: "Bogoro",
        state: "Bauchi",
        school_id: "FES-BB",
        school_email: "fourthexampleschool@gmail.com",
        image: require("./img/122-1224567_stafford-county-public-school-logo-best-logo-for 1.png"),
        debtors: [
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
    },

    {
        id: 5,
        name: "Fifth Example School",
        lga: "Offa",
        state: "Kwara",
        school_id: "FES-OK",
        school_email: "fifthexampleschool@gmail.com",
        image: require("./img/Ellipse 6.png"),
        debtors: [
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
    },

    {
        id: 6,
        name: "Sixth Example School",
        lga: "Ilorin West",
        state: "Kwara",
        school_id: "SES-IK",
        school_email: "sixthexampleschool@gmail.com",
        image: require("./img/kuala.png"),
        debtors: [
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
    },

    {
        id: 7,
        name: "Seventh Example School",
        lga: "Abeokuta South",
        state: "Ogun",
        school_id: "SES-AO",
        school_email: "seventhexampleschool@gmail.com",
        image: require("./img/OakfieldLogo 1.png"),
        debtors: [
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
    },

    {
        id: 8,
        name: "Eighth Example School",
        lga: "Atiba",
        state: "Oyo",
        school_id: "EES-AO",
        school_email: "eighthexampleschool@gmail.com",
        image: require("./img/png-transparent-british-international-school-in-cairo.png"),
        debtors: [
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
    },

    {
        id: 9,
        name: "Ninth Example School",
        lga: "Egbeda",
        state: "Oyo",
        school_id: "NES-EO",
        school_email: "ninthexampleschool@gmail.com",
        image: require("./img/png-transparent-british-international-school-of-kuala.png"),
        debtors: [
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
    },

    {
        id: 10,
        name: "Tenth Example School",
        lga: "Andoni",
        state: "Rivers",
        school_id: "TES-AR",
        school_email: "tenthexampleschool@gmail.com",
        image: require("./img/preload.png"),
        debtors: [
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
    },

    {
        id: 11,
        name: "Eleventh Example School",
        lga: "Bida",
        state: "Niger",
        school_id: "EES-BN",
        school_email: "eleventhexampleschool@gmail.com",
        image: require("./img/preloader 1.png"),
        debtors: [
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
    },

    {
        id: 12,
        name: "Twelveth Example School",
        lga: "Sabon-Gari",
        state: "Kaduna",
        school_id: "TES-SK",
        school_email: "twelvethexampleschool@gmail.com",
        image: require("./img/Rectangle 67.png"),
        debtors: [
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
    },

    {
        id: 13,
        name: "Thirteenth Example School",
        lga: "Jega",
        state: "Kebbi",
        school_id: "TES-JK",
        school_email: "thirteenthexampleschool@gmail.com",
        time: "2:15 pm",
        image: require("./img/Rectangle 68.png"),
        debtors: [
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
    },

    {
        id: 14,
        name: "Fourteenth Example School",
        lga: "Gireri",
        state: "Adamawa",
        school_id: "FES-IL",
        school_email: "fourteenthexampleschool@gmail.com",
        image: require("./img/School_Logo_1 1.png"),
        debtors: [
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
    },

    {
        id: 15,
        name: "Fifteenth Example School",
        lga: "Ogbaru",
        state: "Anambra",
        school_id: "FES-OA",
        school_email: "fifteenthexampleschool@gmail.com",
        image: require("./img/School-Badge.png"),
        debtors: [
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
    },

    {
        id: 16,
        name: "Sixteenth Example School",
        lga: "Nkanu",
        state: "Enugu",
        school_id: "SES-NE",
        school_email: "sisteenthexampleschool@gmail.com",
        image: require("./img/stafford-county-public-school.png"),
        debtors: [
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
    },

    {
        id: 17,
        name: "Seventeenth Example School",
        lga: "Abuja Municipal",
        state: "FCT-Abuja",
        school_id: "SES-FCTA",
        school_email: "seventeenthexampleschool@gmail.com",
        image: require("./img/Rectangle 67.png"),
        debtors: [
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
    },

    {
        id: 18,
        name: "Eighteenth Example School",
        lga: "Abuja Municipal",
        state: "FCT-Abuja",
        school_id: "EES-FCTA",
        school_email: "eighteenthexampleschool@gmail.com",
        image: require("./img/cairo.png"),
        debtors: [
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
    },

    {
        id: 19,
        name: "Nineteenth Example School",
        lga: "Abuja Municipal",
        state: "FCT-Abuja",
        school_id: "NES-FCTA",
        school_email: "nineteenthexampleschool@gmail.com",
        image: require("./img/preloader 1.png"),
        debtors: [
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
    },

    {
        id: 20,
        name: "Twentieth Example School",
        lga: "Ikeja",
        state: "Lagos",
        school_id: "TES-IL",
        school_email: "twentiethexampleschool@gmail.com",
        image: require("./img/OakfieldLogo 1.png"),
        debtors: [
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
    },


]

export { school_debtors }