

    const viviAvailability = [0, 1, 2, 3, 4, 5, 6]
    const annaAvailability = [1, 2, 4, 5, 6]
    const sophieAvailability = [0, 2, 3, 5, 6]
    const amyAvailability = [4]
    const lilyAvailability = [ 0, 1, 3, 5]
    const vickyAvailability = [0, 3, 6]




    export const allServicesArray = [
        {
            id: "acupressure-thai-massage",
            name: "Acupressure Thai Massage",
            category: "Healing Touch Treasures",
            durationOptions: [45, 60], // in minutes
            pricingOptions: {
                45: {
                    priceId: "price_1QGCIFRwIe8y2zCR3UvyGqKG", //live
                    price: 60
                },
                60: {
                    priceId: "price_1QGCJrRwIe8y2zCRmWZvnBmY", //live
                    // priceId: "price_1QGZPoRwIe8y2zCRky9sCoQu", //test
                    price: 75
                }
            },
            therapists: [
                    {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability,
                    },
                ]
        },

        {
            id: "aromatic-hot-stone-massage",
            name: "Aromatic Hot Stone Massage",
            category: "Healing Touch Treasures",
            durationOptions: [30, 45, 60],
            pricingOptions: {
                30: {
                    priceId: "price_1QGCLURwIe8y2zCR7PJoHAoN", //live
                    // priceId: "price_1QGZQkRwIe8y2zCRhEbBAQEO", //test
                    price: 40
                },
                45: {
                    priceId: "price_1QGCMxRwIe8y2zCRyxTIWzbV", //live
                    price: 50
                },
                60: {
                    priceId: "price_1QGCOERwIe8y2zCRvbVMdY7C", //live
                    price: 60
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },
            ]
        },

        {
            id: "couples-massage",
            name: "Couples Massage",
            category: "Healing Touch Treasures",
            durationOptions: [60],
            pricingOptions: {
                60: {
                    priceId: "price_1QGCPpRwIe8y2zCR4TNjNhmj", //live
                    // priceId: "price_1QGZSSRwIe8y2zCREfG2bmz4", //test
                    price: 160
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },
            ]
        },

        {
            id: "deep-tissue-massage",
            name: "Deep Tissue Massage",
            category: "Healing Touch Treasures",
            durationOptions: [30, 45, 60],
            pricingOptions: {
                30: {
                    priceId: "price_1QGCawRwIe8y2zCRU5jcq88A", //live
                    price: 40
                },
                45: {
                    priceId: "price_1QGCbyRwIe8y2zCREYeHcutR", //live
                    price: 50
                },
                60: {
                    priceId: "price_1QGCdcRwIe8y2zCRNTAurHxt", //live
                    price: 60
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },
            ]
        },

        {
            id: "foot-acupressure-massage",
            name: "Foot Acupressure Massage",
            category: "Healing Touch Treasures",
            durationOptions: [30, 45, 60],
            pricingOptions: {
                30: {
                    priceId: "price_1QGCeQRwIe8y2zCRq8qH4cyx", //live
                    price: 40
                },
                45: {
                    priceId: "price_1QGCfcRwIe8y2zCRkLLAkPmE", //live
                    price: 50
                },
                60: {
                    priceId: "price_1QGCh1RwIe8y2zCRUvIvYpXE", //live
                    price: 60
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },
            ]
        },

        {
            id: "head-and-shoulder-thai-massage",
            name: "Head and Shoulder Thai Massage",
            category: "Healing Touch Treasures",
            durationOptions: [15, 30],
            pricingOptions: {
                15: {
                    priceId: "price_1QGCi0RwIe8y2zCRJVvJliw6", //live
                    price: 30
                },
                30: {
                    priceId: "price_1QGCipRwIe8y2zCRAdR43OaB", //live
                    price: 40
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
            ]
        },

        {
            id: "japanese-shiatsu-massage",
            name: "Japanese Shiatsu Massage",
            category: "Healing Touch Treasures",
            durationOptions: [30, 45, 60, 90],
            pricingOptions: {
                30: {
                    priceId: "price_1QGCjgRwIe8y2zCR0PFdyVZW", //live
                    price: 40
                },
                45: {
                    priceId: "price_1QGCl0RwIe8y2zCR0ZRaNwZJ", //live
                    price: 50
                },
                60: {
                    priceId: "price_1QGCloRwIe8y2zCRa5v2pPON", //live
                    price: 60
                },
                90: {
                    priceId: "price_1QGCmiRwIe8y2zCRb2oK9EIZ", //live
                    price: 90
                }
            },
            therapists: [
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
            ]
        },

        {
            id: "lymphatic-detoxification",
            name: "Lymphatic Detoxification",
            category: "Healing Touch Treasures",
            durationOptions: [60, 90],
            pricingOptions: {
                60: {
                    priceId: "price_1QGCocRwIe8y2zCR332hB0Z1", //live
                    price: 80
                },
                90: {
                    priceId: "price_1QGCpfRwIe8y2zCRcfA5YTUt", //live
                    price: 110
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "organic-oil-body-massage",
            name: "Organic Oil Body Massage",
            category: "Healing Touch Treasures",
            durationOptions: [30, 45, 60, 90, 120],
            pricingOptions: {
                30: {
                    priceId: "price_1QGCqkRwIe8y2zCR0VBI8oBf", //live
                    price: 40
                },
                45: {
                    priceId: "price_1QGCrqRwIe8y2zCRr8Qnb1sR", //live
                    price: 50
                },
                60: {
                    priceId: "price_1QGCtJRwIe8y2zCRpwwuPZQ9", //live
                    price: 60
                },
                90: {
                    priceId: "price_1QGCuVRwIe8y2zCR1Mu97GQW", //live
                    price: 90
                },
                120: {
                    priceId: "price_1QGCw8RwIe8y2zCRGBGVvVZg", //live
                    price: 120
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "swedish-massage",
            name: "Swedish Massage",
            category: "Healing Touch Treasures",
            durationOptions: [30, 45, 60, 90],
            pricingOptions: {
                30: {
                    priceId: "price_1QGCwyRwIe8y2zCR9ceghPUj", //live
                    price: 40
                },
                45: {
                    priceId: "price_1QGCxtRwIe8y2zCRqz024vau", //live
                    price: 50
                },
                60: {
                    priceId: "price_1QGCypRwIe8y2zCRaCDgrfJh", //live
                    price: 60
                },
                90: {
                    priceId: "price_1QGCzvRwIe8y2zCRHQhWdMA1", //live
                    price: 90
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "table-shower",
            name: "Table Shower",
            category: "Healing Touch Treasures",
            durationOptions: [30],
            pricingOptions: {
                30: {
                    priceId: "price_1QGD0gRwIe8y2zCRlF1kl74b", //live
                    price: 60
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "traditional-thai-massage",
            name: "Traditional Thai Massage",
            category: "Healing Touch Treasures",
            durationOptions: [60, 90],
            pricingOptions: {
                60: {
                    priceId: "price_1QGD1yRwIe8y2zCR9Zmylgtj", //live
                    price: 80
                },
                90: {
                    priceId: "price_1QGD2mRwIe8y2zCRO16oswAh", //live
                    price: 100
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
            ]
        },


        // LADIES RETREAT
        {
            id: "body-and-soul-retreat-combo",
            name: "Body and Soul Retreat Combo",
            category: "Ladies Retreat",
            durationOptions: [60],
            pricingOptions: {
                60: {
                    priceId: "price_1QGNLyRwIe8y2zCR8cH4oV7J", //live
                    price: 80
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "chest-and-stomach-energy-awaken-combo",
            name: "Chest and Stomach Energy Awaken Combo (60 mins)",
            category: "Ladies Retreat",
            durationOptions: [60, 90],
            pricingOptions: {
                60: {
                    priceId: "price_1QGNN5RwIe8y2zCRUFtsT4Mx", //live
                    price: 100
                },
                90: {
                    priceId: "price_1QGNMXRwIe8y2zCRcUsFXpGq", //live
                    price: 120
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "booming-life-combo",
            name: "Booming Life Combo (60 mins)",
            category: "Ladies Retreat",
            durationOptions: [60, 90],
            pricingOptions: {
                60: {
                    priceId: "price_1QGNOORwIe8y2zCRBed7SOtX", //live
                    price: 100
                },
                90: {
                    priceId: "price_1QGNNeRwIe8y2zCRKUN0hfcO", //live
                    price: 130
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "sweet-care-combo",
            name: "Sweet Care Combo",
            category: "Ladies Retreat",
            durationOptions: [60],
            pricingOptions: {
                60: {
                    priceId: "price_1QGNOxRwIe8y2zCREWBrSmSL", //live
                    price: 100
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },


        // SCALP AND FOOT CARE
        {
            id: "combo-a",
            name: "Combo A",
            category: "Scalp and Foot Care",
            durationOptions: [90],
            pricingOptions: {
                90: {
                    priceId: "price_1QGNSrRwIe8y2zCRQ4FwXrrD", //live
                    price: 95
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "combo-b",
            name: "Combo B",
            category: "Scalp and Foot Care",
            durationOptions: [90],
            pricingOptions: {
                90: {
                    priceId: "price_1QGNTDRwIe8y2zCRR4RpNkNY", //live
                    price: 105
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "combo-c",
            name: "Combo C",
            category: "Scalp and Foot Care",
            durationOptions: [90],
            pricingOptions: {
                90: {
                    priceId: "price_1QGNTbRwIe8y2zCRCx1QOq8S", //live
                    price: 90
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "destress-and-rebalance-combo",
            name: "Destress and Rebalance Combo",
            category: "Scalp and Foot Care",
            durationOptions: [60],
            pricingOptions: {
                60: {
                    priceId: "price_1QGNUnRwIe8y2zCR2jSXPuIS", //live
                    price: 80
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "sport-and-jet-lag-retreat-combo",
            name: "Sport and Jet Lag Retreat Combo",
            category: "Scalp and Foot Care",
            durationOptions: [90],
            pricingOptions: {
                90: {
                    priceId: "price_1QGNVRRwIe8y2zCRMjgrWY9L", //live
                    price: 100
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },


        // ESSENCE OF BODY WELLNESS
        {
            id: "body-and-soul-combo",
            name: "Body and Soul Combo",
            category: "Essence of Body Wellness",
            durationOptions: [75],
            pricingOptions: {
                75: {
                    priceId: "price_1QGNlkRwIe8y2zCRv6ZmFkS8", //live
                    price: 90
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "dream-package-combo",
            name: "Dream Package Combo",
            category: "Essence of Body Wellness",
            durationOptions: [90],
            pricingOptions: {
                90: {
                    priceId: "price_1QGNmaRwIe8y2zCRR1jgOQ3K", //live
                    price: 90    
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "pain-relief-and-pain-prevention-combo",
            name: "Pain Relief and Pain Prevention Combo",
            category: "Essence of Body Wellness",
            durationOptions: [75],
            pricingOptions: {
                75: {
                    priceId: "price_1QGNn5RwIe8y2zCRTcZq1dCZ", //live
                    price: 90
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "golfers-heaven-combo",
            name: "Golfer's Heaven Combo",
            category: "Essence of Body Wellness",
            durationOptions: [90],
            pricingOptions: {
                90: {
                    priceId: "price_1QGNndRwIe8y2zCRvuHLvVaP", //live
                    price: 100
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "lets-relax-experience-combo",
            name: "Let's Relax Experience Combo",
            category: "Essence of Body Wellness",
            durationOptions: [105],
            pricingOptions: {
                105: {
                    priceId: "price_1QGNo7RwIe8y2zCRfXLjsaI7", //live
                    price: 120
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                },
                {
                    id: "sophie",
                    name: "Sophie",
                    availableDays: sophieAvailability
                },
                {
                    id: "amy",
                    name: "Amy",
                    availableDays: amyAvailability
                },
                {
                    id: "lily",
                    name: "Lily",
                    availableDays: lilyAvailability
                },
                {
                    id: "vicky",
                    name: "Vicky",
                    availableDays: vickyAvailability
                },            
            ]
        },

        {
            id: "test-combo",
            name: "Test Combo",
            category: "Essence of Body Wellness",
            durationOptions: [30],
            pricingOptions: {
                30: {
                    priceId: "price_1QGvS8RwIe8y2zCRruzDlsHT", //live
                    // priceId: "price_1QGvTLRwIe8y2zCRPJVaa9WG", //test
                    price: 1
                }
            },
            therapists: [
                {
                    id: "vivi",
                    name: "Vivi",
                    availableDays: viviAvailability
                },
                {
                    id: "anna",
                    name: "Anna",
                    availableDays: annaAvailability
                }
            ]
        }

        // CURATED LUXE ADDITIONS
        // ............
        
    ];
  



    export const servicesList = [
        {
            name: "Healing Touch Treasures",
            image: "/images/services/healing-touch-treasures-image.png",
            url: "/healing-touch-treasures"
        },
        {
            name: "Ladies Retreat",
            image: "/images/services/ladies-retreat-image.png",
            url: "/ladies-retreat"
        },
        {
            name: "Nurturing Scalp & Foot Care",
            image: "/images/services/scalp-and-foot-care-image.png",
            url: "/scalp-and-foot-care"
        },
        {
            name: "Essence of Body Wellness",
            image: "/images/services/essence-of-body-wellness-image.png",
            url: "/essence-of-body-wellness"
        },
        {
            name: "Curated Luxe Additions",
            image: "/images/services/curated-luxe-additions-image.png",
            url: "/curated-luxe-additions"
        }
    ]



    export const teamMembersList = [
        {
            image: "/images/team/vivi.jpg",
            name: "Vivi",
            description: "Manager / Registered Massage Therapist - IASTM, Cupping and Thai Massage specialist"
        },
        {
            image: "/images/team/anna.jpg",
            name: "Anna",
            description: "Specialist - Japanese Shiatsu, Deep Tissue and Ear Cleaning"
        },
        {
            image: "/images/team/sophie.jpg",
            name: "Sophie",
            description: "Specialist - Deep Tissue and Swedish Massage"
        },
        {
            image: "/images/team/amy.jpg",
            name: "Amy",
            description: "Specialist - Table Shower and Swedish Massage"
        },
        {
            image: "/images/team/lily.jpg",
            name: "Lily",
            description: "Specialist - Reflexology and Swedish Massage"
        },
        {
            image: "/images/team/vicky.jpg",
            name: "Vicky",
            description: "Specialist - Table Shower and Aromatherapy"
        },
    ]


    export const oldServicesList = [
    {
        name: "Massages",
        icon: "/images/services/massage.svg",
        url: "/massages"
    },
    {
        name: "Body Scrubs",
        icon: "/images/services/body-scrub.svg",
        url: "/body-scrubs"
    },
    {
        name: "Table Shower",
        icon: "/images/services/table-shower.svg",
        url: "/table-shower"
    },
    {
        name: "Hot Stone Therapy",
        icon: "/images/services/hot-stone-therapy.svg",
        url: "/hot-stone-therapy"
    },
    {
        name: "Aromatherapy",
        icon: "/images/services/aromatherapy.svg",
        url: "/aromatherapy"
    },
    {
        name: "Reflexology",
        icon: "/images/services/reflexology.svg",
        url: "reflexology"
    }
]


export const massagesList = [
    {
        name: "Thai Massage",
        icon: "/images/services/massage.svg",
        url: "/massages/thai-massage"
    },
    {
        name: "Shiatsu Massage",
        icon: "/images/services/massage.svg",
        url: "/massages/shiatsu-massage"
    },
    {
        name: "Swedish Massage",
        icon: "/images/services/massage.svg",
        url: "/massages/swedish-massage"
    },
    {
        name: "Deep Tissue Massage",
        icon: "/images/services/massage.svg",
        url: "/massages/deep-tissue-massage"
    },
    {
        name: "Face Massage",
        icon: "/images/services/massage.svg",
        url: "/massages/face-massage"
    },
    {
        name: "Scalp Massage",
        icon: "/images/services/massage.svg",
        url: "/massages/scalp-massage"
    },
    {
        name: "Couples Massage",
        icon: "/images/services/massage.svg",
        url: "/massages/couples-massage"
    },
    {
        name: "Prenatal Massage",
        icon: "/images/services/massage.svg",
        url: "/massages/prenatal-massage"
    },
    {
        name: "Postnatal Massage",
        icon: "/images/services/massage.svg",
        url: "/massages/postnatal-massage"
    },
]



export const bodyScrubsList = [
    {
        name: "Sea Salt Scrub",
        icon: "/images/services/body-scrub.svg",
        url: "/body-scrubs/sea-salt-scrub"
    },
    {
        name: "Sugar Scrub",
        icon: "/images/services/body-scrub.svg",
        url: "/body-scrubs/sugar-scrub"
    },
    {
        name: "Coffee Scrub",
        icon: "/images/services/body-scrub.svg",
        url: "/body-scrubs/coffee-scrub"
    },
]




