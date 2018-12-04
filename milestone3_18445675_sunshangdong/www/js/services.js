angular.module('app.services', [])

    .service('Venues', function () {
        var venues = [
            {
                "VenueID": "1",
                "VenueName": "POD",
                "Latitude": 22.340778,
                "Longitude": 114.179943,
                "CampusID": "HSH"
            },
            {
                "VenueID": "2",
                "VenueName": "SWT501",
                "Latitude": 22.338867,
                "Longitude": 114.181909,
                "CampusID": "SHAW"
            },
            {
                "VenueID": "3",
                "VenueName": "LW",
                "Latitude": 22.337639,
                "Longitude": 114.181986,
                "CampusID": "SHAW"
            },
            {
                "VenueID": "4",
                "VenueName": "LIP",
                "Latitude": 22.338376,
                "Longitude": 114.182043,
                "CampusID": "SHAW"
            },
            {
                "VenueID": "5",
                "VenueName": "OEE",
                "Latitude": 22.340875,
                "Longitude": 114.180315,
                "CampusID": "HSH"
            },
            {
                "VenueID": "6",
                "VenueName": "JSCY",
                "Latitude": 22.335191,
                "Longitude": 114.18233,
                "CampusID": "BURC"
            },
            {
                "VenueID": "7",
                "VenueName": "MAINPO",
                "Latitude": 22.340359,
                "Longitude": 114.179905,
                "CampusID": "HSH"
            },
            {
                "VenueID": "8",
                "VenueName": "WLB",
                "Latitude": 22.33779,
                "Longitude": 114.18175,
                "CampusID": "SHAW"
            },
            {
                "VenueID": "9",
                "VenueName": "AST",
                "Latitude": 22.341284,
                "Longitude": 114.180171,
                "CampusID": "HSH"
            },
            {
                "VenueID": "10",
                "VenueName": "AMP",
                "Latitude": 22.337959,
                "Longitude": 114.181919,
                "CampusID": "SHAW"
            },
            {
                "VenueID": "11",
                "VenueName": "SCT",
                "Latitude": 22.34064,
                "Longitude": 114.18012,
                "CampusID": "HSH"
            },
            {
                "VenueID": "12",
                "VenueName": "SCE",
                "Latitude": 22.336109,
                "Longitude": 114.182735,
                "CampusID": "BURC"
            },
            {
                "VenueID": "13",
                "VenueName": "WHSC",
                "Latitude": 22.339522,
                "Longitude": 114.181659,
                "CampusID": "HSH"
            },
            {
                "VenueID": "14",
                "VenueName": "JSC",
                "Latitude": 22.337776,
                "Longitude": 114.182298,
                "CampusID": "SHAW"
            },
            {
                "VenueID": "15",
                "VenueName": "CHAP",
                "Latitude": 22.341138,
                "Longitude": 114.180205,
                "CampusID": "HSH"
            },
            {
                "VenueID": "16",
                "VenueName": "SCM",
                "Latitude": 22.335761,
                "Longitude": 114.18245,
                "CampusID": "BURC"
            },
            {
                "VenueID": "17",
                "VenueName": "CVA",
                "Latitude": 22.33431,
                "Longitude": 114.182408,
                "CampusID": "BURC"
            },
            {
                "VenueID": "18",
                "VenueName": "AC Hall",
                "Latitude": 22.341197,
                "Longitude": 114.179763,
                "CampusID": "HSH"
            },
            {
                "VenueID": "19",
                "VenueName": "LMC",
                "Latitude": 22.341,
                "Longitude": 114.17974,
                "CampusID": "HSH"
            },
            {
                "VenueID": "20",
                "VenueName": "FSC901E",
                "Latitude": 22.340292,
                "Longitude": 114.180157,
                "CampusID": "HSH"
            },
            {
                "VenueID": "21",
                "VenueName": "ACC",
                "Latitude": 22.336146,
                "Longitude": 114.182614,
                "CampusID": "BURC"
            },
            {
                "VenueID": "22",
                "VenueName": "OEM",
                "Latitude": 22.34087,
                "Longitude": 114.180015,
                "CampusID": "HSH"
            },
            {
                "VenueID": "23",
                "VenueName": "OEW",
                "Latitude": 22.340817,
                "Longitude": 114.179599,
                "CampusID": "HSH"
            },
            {
                "VenueID": "24",
                "VenueName": "RRS638",
                "Latitude": 22.340252,
                "Longitude": 114.179615,
                "CampusID": "HSH"
            },
            {
                "VenueID": "25",
                "VenueName": "DLB",
                "Latitude": 22.337419,
                "Longitude": 114.181895,
                "CampusID": "SHAW"
            },
            {
                "VenueID": "26",
                "VenueName": "AAB",
                "Latitude": 22.33664,
                "Longitude": 114.1824,
                "CampusID": "BURC"
            }

        ];
        this.getVenues = function () {
            return venues;
        };
        this.getVenuesbyID = function (id) {
            var a = Venues.filter(function (item) {
                return item.VenueID == id;
            });
            return a[0];
        };

    }
    )
    .service('User', function () {
        var user;
        this.getuser = function () {
            return user;
        };
        this.setuser = function (value) {
            user = value;
        };
    })

    .factory('BlankFactory', [function () {

    }])

    .service('BlankService', [function () {

    }]);