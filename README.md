# ReponsiveDataTable

This is a simple table in react that allows JSON data to be searched and filtered.

# Typical usage 
 ```
 import Summaries from '../components/JSONTables/summarytable'

const IndexPage = () => (
  <PageBody >
   
   <div style={{maxWidth:`900px`,width:`100%`}}>
   <Summaries isLoading = {false} tableData={sampleData}/>
   </div>
 
  </PageBody>
)
```

# Props 

isLoading : This is a boolean that controls whether or not the little loading indicator shows up. 

tableData : This is the actual data that is meant to be displayed to be the user. 

# Features

Date can sorted by key and in reverse. It can also be sorted and filtered at the same time. It automatically applied those
filters to new data that comes in. 

const sampleData = [{
  "sale": "$1.50",
  "username": "Llywellyn",
  "last_name": "Archibould",
  "email": "larchibould0@cocolog-nifty.com",
  "gender": "Male",
  "ip_address": "219.68.209.200"
}, {
  "sale": "$4.13",
  "username": "Noemi",
  "last_name": "Molian",
  "email": "nmolian1@loc.gov",
  "gender": "Female",
  "ip_address": "51.218.90.27"
}, {
  "sale": "$6.55",
  "username": "Siusan",
  "last_name": "Gunson",
  "email": "sgunson2@ustream.tv",
  "gender": "Female",
  "ip_address": "25.91.233.140"
}, {
  "sale": "$9.90",
  "username": "Angele",
  "last_name": "Braxay",
  "email": "abraxay3@arizona.edu",
  "gender": "Female",
  "ip_address": "162.226.12.20"
}, {
  "sale": "$9.78",
  "username": "Rodger",
  "last_name": "Stennard",
  "email": "rstennard4@tripod.com",
  "gender": "Male",
  "ip_address": "100.236.204.239"
}, {
  "sale": "$5.44",
  "username": "Winona",
  "last_name": "McConnal",
  "email": "wmcconnal5@spiegel.de",
  "gender": "Female",
  "ip_address": "92.71.34.184"
}, {
  "sale": "$8.50",
  "username": "Judy",
  "last_name": "Pendlenton",
  "email": "jpendlenton6@vkontakte.ru",
  "gender": "Female",
  "ip_address": "167.97.245.45"
}, {
  "sale": "$2.48",
  "username": "Mariana",
  "last_name": "Redmire",
  "email": "mredmire7@buzzfeed.com",
  "gender": "Female",
  "ip_address": "150.55.24.61"
}, {
  "sale": "$6.97",
  "username": "Waylin",
  "last_name": "Giddins",
  "email": "wgiddins8@arstechnica.com",
  "gender": "Female",
  "ip_address": "14.30.53.18"
}, {
  "sale": "$6.04",
  "username": "Walther",
  "last_name": "Burfoot",
  "email": "wburfoot9@umn.edu",
  "gender": "Male",
  "ip_address": "114.222.55.50"
}, {
  "sale": "$1.88",
  "username": "Ingaberg",
  "last_name": "Faulconer",
  "email": "ifaulconera@home.pl",
  "gender": "Female",
  "ip_address": "241.184.85.3"
}, {
  "sale": "$9.92",
  "username": "Aledcd",
  "last_name": "Eicheler",
  "email": "keichelerb@state.tx.us",
  "gender": "Male",
  "ip_address": "160.126.52.192"
}, {
  "sale": "$2.49",
  "username": "Aleda",
  "last_name": "Dominetti",
  "email": "adominettic@pen.io",
  "gender": "Female",
  "ip_address": "0.36.12.122"
}, {
  "sale": "$6.09",
  "username": "Tedman",
  "last_name": "Cardillo",
  "email": "tcardillod@nba.com",
  "gender": "Male",
  "ip_address": "122.52.63.233"
}, {
  "sale": "$1.35",
  "username": "Hermina",
  "last_name": "Dorton",
  "email": "hdortone@altervista.org",
  "gender": "Female",
  "ip_address": "86.84.25.41"
}, {
  "sale": "$2.12",
  "username": "Fina",
  "last_name": "O' Meara",
  "email": "fomearaf@mozilla.org",
  "gender": "Female",
  "ip_address": "194.0.157.105"
}, {
  "sale": "$9.69",
  "username": "Axe",
  "last_name": "Eby",
  "email": "aebyg@friendfeed.com",
  "gender": "Male",
  "ip_address": "247.146.130.25"
}, {
  "sale": "$4.76",
  "username": "Andrea",
  "last_name": "Layus",
  "email": "alayush@mashable.com",
  "gender": "Male",
  "ip_address": "183.128.138.113"
}, {
  "sale": "$5.19",
  "username": "Inness",
  "last_name": "Bridgett",
  "email": "ibridgetti@comsenz.com",
  "gender": "Male",
  "ip_address": "209.0.14.58"
}, {
  "sale": "$3.27",
  "username": "Sholom",
  "last_name": "Lapenna",
  "email": "slapennaj@goo.ne.jp",
  "gender": "Male",
  "ip_address": "238.206.11.133"
}]

