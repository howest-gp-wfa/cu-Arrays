const sitcomData = [
  {
    id: 1,
    rank: 70,
    sitcomName: "3rd Rock from the Sun",
    years: "1996-2001"
  },
  {
    id: 2,
    rank: 53,
    sitcomName: "ALF",
    years: "1986-1990"
  },
  {
    id: 3,
    rank: 5,
    sitcomName: "All In The Family",
    years: "1971-1979"
  },
  {
    id: 4,
    rank: 13,
    sitcomName: "Arrested Development",
    years: "2003-2006"
  },
  {
    id: 5,
    rank: 27,
    sitcomName: "Beavis and Butthead",
    years: "1993-1997"
  },
  {
    id: 6,
    rank: 99,
    sitcomName: "Becker",
    years: "1998-2004"
  },
  {
    id: 7,
    rank: 25,
    sitcomName: "Bewitched",
    years: "1964-1972"
  },
  {
    id: 8,
    rank: 85,
    sitcomName: "Bosom Buddies",
    years: "1980-1982"
  },
  {
    id: 9,
    rank: 77,
    sitcomName: "Boy Meets World",
    years: "1993-2000"
  },
  {
    id: 10,
    rank: 109,
    sitcomName: "California Dreams",
    years: "1992-1997"
  },
  {
    id: 11,
    rank: 44,
    sitcomName: "Charles in Charge",
    years: "1984-1985, 1987-1990"
  },
  {
    id: 12,
    rank: 7,
    sitcomName: "Cheers",
    years: "1982-1993"
  },
  {
    id: 13,
    rank: 110,
    sitcomName: "Chico and the Man",
    years: "1974-1978"
  },
  {
    id: 14,
    rank: 59,
    sitcomName: "Coach",
    years: "1989-1997"
  },
  {
    id: 15,
    rank: 58,
    sitcomName: "Community",
    years: "2009-Present"
  },
  {
    id: 16,
    rank: 24,
    sitcomName: "Curb Your Enthusiasm",
    years: "2000-Present"
  },
  {
    id: 17,
    rank: 105,
    sitcomName: "Dennis the Menace",
    years: "1959-1963"
  },
  {
    id: 18,
    rank: 26,
    sitcomName: "Diff'rent Strokes",
    years: "1978-1986"
  },
  {
    id: 19,
    rank: 82,
    sitcomName: "Dinosaurs",
    years: "1991-1994"
  },
  {
    id: 20,
    rank: 19,
    sitcomName: "Everybody Loves Raymond",
    years: "1996-2005"
  },
  {
    id: 21,
    rank: 104,
    sitcomName: "Family Affair",
    years: "1966-1971"
  },
  {
    id: 22,
    rank: 89,
    sitcomName: "Family Guy",
    years: "1999-2001, 2004-Present"
  },
  {
    id: 23,
    rank: 61,
    sitcomName: "Family Matters",
    years: "1989-1998"
  },
  {
    id: 24,
    rank: 4,
    sitcomName: "Family Ties",
    years: "1982-1989"
  },
  {
    id: 25,
    rank: 11,
    sitcomName: "Frasier",
    years: "1993-2004"
  },
  {
    id: 26,
    rank: 10,
    sitcomName: "Friends",
    years: "1994-2004"
  },
  {
    id: 27,
    rank: 21,
    sitcomName: "Full House",
    years: "1987-1995"
  },
  {
    id: 28,
    rank: 42,
    sitcomName: "Futurama",
    years: "1999-2003, 2008-Present"
  },
  {
    id: 29,
    rank: 95,
    sitcomName: "Get Smart",
    years: "1965-1970"
  },
  {
    id: 30,
    rank: 37,
    sitcomName: "Gilligan's Island",
    years: "1964-1967"
  },
  {
    id: 31,
    rank: 62,
    sitcomName: "Gomer Pyle, U.S.M.C.",
    years: "1964-1969"
  },
  {
    id: 32,
    rank: 96,
    sitcomName: "Good Times",
    years: "1974-1979"
  },
  {
    id: 33,
    rank: 81,
    sitcomName: "Green Acres",
    years: "1965-1971"
  },
  {
    id: 34,
    rank: 47,
    sitcomName: "Growing Pains",
    years: "1985-1992"
  },
  {
    id: 35,
    rank: 83,
    sitcomName: "Hangin' with Mr. Cooper",
    years: "1992-1997"
  },
  {
    id: 36,
    rank: 15,
    sitcomName: "Happy Days",
    years: "1974-1984"
  },
  {
    id: 37,
    rank: 103,
    sitcomName: "Here's Lucy",
    years: "1968-1974"
  },
  {
    id: 38,
    rank: 31,
    sitcomName: "Home Improvement",
    years: "1991-1999"
  },
  {
    id: 39,
    rank: 30,
    sitcomName: "I Dream of Jeannie",
    years: "1965-1970"
  },
  {
    id: 40,
    rank: 2,
    sitcomName: "I Love Lucy",
    years: "1951-1957"
  },
  {
    id: 41,
    rank: 94,
    sitcomName: "Laverne & Shirley",
    years: "1976-1983"
  },
  {
    id: 42,
    rank: 23,
    sitcomName: "Leave It To Beaver",
    years: "1957-1963"
  },
  {
    id: 43,
    rank: 6,
    sitcomName: "M*A*S*H",
    years: "1972-1983"
  },
  {
    id: 44,
    rank: 60,
    sitcomName: "Mad About You",
    years: "1992-1999"
  },
  {
    id: 45,
    rank: 91,
    sitcomName: "Make Room For Danny [The Danny Thomas Show]",
    years: "1953-1964"
  },
  {
    id: 46,
    rank: 34,
    sitcomName: "Malcolm In the Middle",
    years: "2000-2006"
  },
  {
    id: 47,
    rank: 57,
    sitcomName: "Mama's Family",
    years: "1983-1985,1986-1990"
  },
  {
    id: 48,
    rank: 39,
    sitcomName: "Married With... Children",
    years: "1987-1997"
  },
  {
    id: 49,
    rank: 20,
    sitcomName: "Mary Tyler Moore",
    years: "1970-1977"
  },
  {
    id: 50,
    rank: 93,
    sitcomName: "Maude",
    years: "1972-1978"
  },
  {
    id: 51,
    rank: 80,
    sitcomName: "Mister Ed",
    years: "1961-1966"
  },
  {
    id: 52,
    rank: 36,
    sitcomName: "Modern Family",
    years: "2009-Present"
  },
  {
    id: 53,
    rank: 46,
    sitcomName: "Mork and Mindy",
    years: "1978-1982"
  },
  {
    id: 54,
    rank: 101,
    sitcomName: "Mr. Belvedere",
    years: "1985-1990"
  },
  {
    id: 55,
    rank: 29,
    sitcomName: "Murphy Brown",
    years: "1988-1998"
  },
  {
    id: 56,
    rank: 100,
    sitcomName: "My Favorite Martian",
    years: "1963-1966"
  },
  {
    id: 57,
    rank: 78,
    sitcomName: "My Three Sons",
    years: "1960-1972"
  },
  {
    id: 58,
    rank: 51,
    sitcomName: "Newhart",
    years: "1982-1990"
  },
  {
    id: 59,
    rank: 28,
    sitcomName: "News Radio",
    years: "1995-1999"
  },
  {
    id: 60,
    rank: 50,
    sitcomName: "Night Court",
    years: "1984-1992"
  },
  {
    id: 61,
    rank: 65,
    sitcomName: "Perfect Strangers",
    years: "1986-1992"
  },
  {
    id: 62,
    rank: 92,
    sitcomName: "Petticoat Junction",
    years: "1963-1970"
  },
  {
    id: 63,
    rank: 87,
    sitcomName: "Punky Brewster",
    years: "1984-1986"
  },
  {
    id: 64,
    rank: 107,
    sitcomName: "Rhoda",
    years: "1974-1978"
  },
  {
    id: 65,
    rank: 22,
    sitcomName: "Roseanne",
    years: "1988-1998"
  },
  {
    id: 66,
    rank: 84,
    sitcomName: "Sabrina, the Teenage Witch",
    years: "1996-2003"
  },
  {
    id: 67,
    rank: 40,
    sitcomName: "Sanford and Son",
    years: "1972-1977"
  },
  {
    id: 68,
    rank: 71,
    sitcomName: "Saved By The Bell",
    years: "1990-1993"
  },
  {
    id: 69,
    rank: 1,
    sitcomName: "Seinfeld",
    years: "1989-1998"
  },
  {
    id: 70,
    rank: 88,
    sitcomName: "Silver Spoons",
    years: "1982-1986"
  },
  {
    id: 71,
    rank: 97,
    sitcomName: "Soap",
    years: "1977-1981"
  },
  {
    id: 72,
    rank: 32,
    sitcomName: "South Park",
    years: "1997-Present"
  },
  {
    id: 73,
    rank: 12,
    sitcomName: "Taxi",
    years: "1978-1982"
  },
  {
    id: 74,
    rank: 33,
    sitcomName: "That 70's Show",
    years: "1998-2006"
  },
  {
    id: 75,
    rank: 108,
    sitcomName: "That Girl",
    years: "1966-1971"
  },
  {
    id: 76,
    rank: 79,
    sitcomName: "The Addams Family",
    years: "1964-1966"
  },
  {
    id: 77,
    rank: 69,
    sitcomName: "The Adventures of Ozzie & Harriet",
    years: "1952-1966"
  },
  {
    id: 78,
    rank: 18,
    sitcomName: "The Andy Griffith Show",
    years: "1960-1968"
  },
  {
    id: 79,
    rank: 43,
    sitcomName: "The Beverly Hillbillies",
    years: "1962-1971"
  },
  {
    id: 80,
    rank: 68,
    sitcomName: "The Big Bang Theory",
    years: "2007-Present"
  },
  {
    id: 81,
    rank: 35,
    sitcomName: "The Bob Newhart Show",
    years: "1972-1978"
  },
  {
    id: 82,
    rank: 14,
    sitcomName: "The Brady Bunch",
    years: "1969-1974"
  },
  {
    id: 83,
    rank: 8,
    sitcomName: "The Cosby Show",
    years: "1984-1992"
  },
  {
    id: 84,
    rank: 67,
    sitcomName: "The Dick Van Dyke Show",
    years: "1961-1966"
  },
  {
    id: 85,
    rank: 102,
    sitcomName: "The Donna Reed Show",
    years: "1958-1966"
  },
  {
    id: 86,
    rank: 9,
    sitcomName: "The Facts of Life",
    years: "1979-1988"
  },
  {
    id: 87,
    rank: 48,
    sitcomName: "The Flintstones",
    years: "1960-1966"
  },
  {
    id: 88,
    rank: 49,
    sitcomName: "The Fresh Prince of Bel-Air",
    years: "1990-1996"
  },
  {
    id: 89,
    rank: 52,
    sitcomName: "The Golden Girls",
    years: "1985-1992"
  },
  {
    id: 90,
    rank: 64,
    sitcomName: "The Honeymooners",
    years: "1955-1956"
  },
  {
    id: 91,
    rank: 63,
    sitcomName: "The Jeffersons",
    years: "1975-1985"
  },
  {
    id: 92,
    rank: 45,
    sitcomName: "The King of Queens",
    years: "1998-2007"
  },
  {
    id: 93,
    rank: 16,
    sitcomName: "The King of the Hill",
    years: "1996-2010"
  },
  {
    id: 94,
    rank: 41,
    sitcomName: "The Love Boat",
    years: "1977-1986"
  },
  {
    id: 95,
    rank: 90,
    sitcomName: "The Lucy Show",
    years: "1962-1968"
  },
  {
    id: 96,
    rank: 111,
    sitcomName: "The Many Loves of Dobie Gillis",
    years: "1959-1963"
  },
  {
    id: 97,
    rank: 106,
    sitcomName: "The Monkees",
    years: "1966-1968"
  },
  {
    id: 98,
    rank: 76,
    sitcomName: "The Munsters",
    years: "1964-1966"
  },
  {
    id: 99,
    rank: 66,
    sitcomName: "The Nanny",
    years: "1993-1999"
  },
  {
    id: 100,
    rank: 54,
    sitcomName: "The Odd Couple",
    years: "1970-1975"
  },
  {
    id: 101,
    rank: 38,
    sitcomName: "The Office",
    years: "2005-Present"
  },
  {
    id: 102,
    rank: 75,
    sitcomName: "The Partridge Family",
    years: "1970-1974"
  },
  {
    id: 103,
    rank: 3,
    sitcomName: "The Simpsons",
    years: "1989-Present"
  },
  {
    id: 104,
    rank: 17,
    sitcomName: "Three's Company",
    years: "1977-1984"
  },
  {
    id: 105,
    rank: 86,
    sitcomName: "Two and a Half Men",
    years: "2003-Present"
  },
  {
    id: 106,
    rank: 55,
    sitcomName: "Welcome Back, Kotter",
    years: "1975-1979"
  },
  {
    id: 107,
    rank: 73,
    sitcomName: "What's Happening!!",
    years: "1976-1979, 1985-1988"
  },
  {
    id: 108,
    rank: 72,
    sitcomName: "Who's the Boss?",
    years: "1984-1992"
  },
  {
    id: 109,
    rank: 98,
    sitcomName: "Will and Grace",
    years: "1998-2006"
  },
  {
    id: 110,
    rank: 56,
    sitcomName: "Wings",
    years: "1990-1997"
  },
  {
    id: 111,
    rank: 74,
    sitcomName: "WKRP in Cincinnati",
    years: "1978-1982"
  }];