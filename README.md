# Chicago School Search
Heroku project link: https://chicago-school-info.herokuapp.com/

## Project Goal - Data meets Civic Engagement
When this project was deployed, it was a turbulent time for Chicago Public Schools. As of October 23, 2019, Chicago Public Schools were closed while the teachers were on strike. 

In the midst of the turmoil, our team wanted to provide a way for Chicago citizens to be better informed about the public schools in their area. Chicago School Search allows Chicago citizens to find data about their local schools, and also provides them with an easy way to contact their local alderman if they want the issue of education to get more attention in their ward. 

## Page Flow

The user is first asked to enter their zipcode. Users who enter a non-Chicago zip code will be told to enter Chicago zip codes only.

![zip code entry box](/public/assets/screenshots/enterzip.png)

Once the zip code has been entered, a map populates. The map is centered on the entered zip code (represented by a blue mark), and red flags are displayed representing the Chicago Public Schools in that zip code: 

![map box](/public/assets/screenshots/basicmap.png)

Clicking on a flag displays the name of the school and its address:

![school flag](/public/assets/screenshots/mapschooldetail.png)

In the section on the right side of the page, the names of each Chicago Public School in that zip code are displayed:

![school list](/public/assets/screenshots/schoollist.png)

The user can click on a school name to display relevant school details: the school level (elementary, middle, or high school), the school safety strength, the instruction level, the ward in which the school is located, and the alderman for that ward:

![school details](/public/assets/screenshots/schooldetails.png)

In addition to the school details, the user can click the alderman's name to display the alderman's contact email and the phone number for the alderman's office:

![alderman details](/public/assets/screenshots/aldermandetails.png)

Clicking the alderman's email will open the user's default email client and generate an email to that email address. 

If there are no Chicago Public Schools in the provided zipcode, a message will display in the section to the right communicating to the user that no schools are in that zipcode: 

![no schools in zip](/public/assets/screenshots/noschools.png)

Finally, at the bottom of the page, the user can sign their name to a petition requesting a town hall in their ward. Once the user enters their information correctly, they are sent a message that their signature has been added:

![signed alert](/public/assets/screenshots/nameadded.png)

And then they are informed of how many people have signed the petition in their ward:

![number signed](/public/assets/screenshots/petitionsigned.png)


## Sources
The school data displayed in Chicago School Search comes from the Chicago Public Schools' School Progress Report Cards in the Chicago Data Portal (https://data.cityofchicago.org/Education/Chicago-Public-Schools-Progress-Report-Cards-2011-/9xs2-f89t/).

The ward data displayed in Chicago School Search comes from the Ward Offices data in the Chicago Data Portal (https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Ward-Offices/htai-wnw4).

School location data displayed in our map is based on a GeoJSON file available from the Chicago Data Portal (https://data.cityofchicago.org/Education/Chicago-Public-Schools-School-Locations-SY1415/3fhj-xtn5).

The background image is courtesy of Pedro Lastra on Unsplash.

## Technology

### Front End
* HTML5
* CSS3
* Bootstrap
* Google Maps and Google Geocoding APIs

### Back End
* Node.js
* Sequelize
* Node Express
* MySQL

## Potential Improvements
* Currently, the petition data exists but does not actually get sent anywhere. Future versions could generate a pdf of the signatures for an individual ward when that ward reaches a specific signature count.
* The mobile version of the site is a little tricky to navigate - future versions will make this more responsive.
* More data could be included for each school - the School Progress Report Card contains a lot of data!

## Authors
Nora Byrd (Github: noracbyrd; Email: noracbyrd@gmail.com), GG Guitart (Github: gguitart; Email: guitart.gg@gmail.com) Will Oakley (Github: woaky1; Email: wmoakley@gmail.com) 