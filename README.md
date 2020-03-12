
# My MS Stories: Epicodus Capstone Project
## Created by Lara Bjork, March 2020

### Project Description
This app will help people who have multiple sclerosis (like me!) record and keep track of what matters most to them. Medical records never tell the whole story of what it’s like to have a chronic health condition or what a patient has done to take care of themselves. Doctors and other medical professionals have different priorities than patients, and there are many details that matter a lot to patients. This app will help patients document the full picture of how the disease is affecting them and all the things that they are doing to take care of themselves.

### Specifications for Minimum Viable Product (MVP)
* Options for user to track doctor-driven actions (appointments, tests, medications) and/or patient-driven actions (other forms of care, exercise, diet, social support, etc.).
* Symptom journaling that helps a user sort through one-off/short-duration symptoms from bigger concerns, while also helping organize symptom info over time to look for patterns; with that info, the user can prep for appointments or other communications with a doctor’s office.
* Journaling will be possible by typing or by transcribing audio recorded by the user (using WebSpeechAPI: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).
* Credit/license for all icons will be displayed properly per guidance at http://icons8.com/license

### User Stories
1. As a user, I want to be able to keep track of significant dates/events in my MS history, so that I can easily tell my story to a health practitioner, either when talking with them or filling out new patient paperwork.
2. As a user, I want to be able to log my experience of having MS, whether or not it meets an official “symptom” or relapse, so that I can make sense of what I live with.
3. As a user, I want to be able to choose how often I make journal entries, so that tracking my experiences stays useful and doesn’t become burdensome.
4. As a user, I want to be able to review my journal to find themes/patterns/questions, so that I can prepare for doctor visits.
5. As a user, I want to be able to track the activities I choose to pursue to support myself, so that I can remind myself that I am taking good care of myself.
6. As a user, I want to be able to choose how I enter information (typed on laptop, tablet or phone, or recorded audio that is then transcribed), so that I can use whatever method is most convenient and most accessible at a given moment.
7. As a user, I want to be able to edit or delete entries from my record.
8. As a user, I want to be able to log in and out, so that I know my information is secure.

### Additional Functionality to be Added After MVP Achieved
  * Deployed via Heroku
  * Mobile version using React Native
  * Calendar integration (for medical appointments and other reminders)
  * Medication management: photos of your medications/dosages, refill reminders
  * Insurance information
  * Authorizing other users to view your info
  * Other ways you can connect to MS community: research study participation, advocacy, fundraising
  * Authentication via bcrypt or Devise

### Component Tree and Routing
Component tree v2.1 ![MS-Tracker-Component-Tree-v2.1](/MS-Tracker-Component-Tree-v2.1.jpg)

### Sources
All icons by Icons8 (https://icons8.com)
Head With brain: https://icons8.com/icon/97367/head-with-brain
Journal: https://icons8.com/icons/set/journal
Microphone: https://icons8.com/icon/47793/microphone
Reflection(person in a mirror): https://icons8.com/icons/set/person-in-a-mirror
Treatment(clipboard): https://icons8.com/icons/set/treatment-plan
Typewriter with paper: https://icons8.com/icons/set/typewriter-with-paper--v2

### Technologies Used
React 16.13.0, Redux 3.7.2, Create-React-App

Project was written using Google Chrome; no other browsers were tested for compatibility.

### Project Setup instructions (until project is deployed on Heroku)
1. Ensure that you have Node.js installed; check that **node** (v4.0.x or higher) and **yarn**
 are in place.
2. After cloning the project locally, you can run **yarn install** to download the necessary dependencies. You can then run **yarn start** to bundle your version of this project. A browser window at localhost:3000 should open.
3. If something doesn't display correctly or goes wrong somehow, please contact me at <lara.m.bjork@gmail.com> and I will do my best to troubleshoot for you.


### Known Issues and Limitations
  * There are no known bugs.

### Where to Find This Project
https://github.com/larabjork/ms-stories-tracker

### License
This software is licensed under the MIT license.

Copyright (c) 2020 Lara Bjork
