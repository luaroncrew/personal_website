# Ubikap | Full stack developer (internship)


```#JavaScript``` ```#FirstExperienceInFrance``` ```#Debugger```
```#Angular``` ```#SQL``` ```#NodeJS``` ```#Startup```


Ubikap is a French startup born in 2021. They are
developing a solution for lawyers and accountants, that
helps dematerialize and automate 
almost all paperwork in their jobs.


## My missions
My main mission was to concept and develop new features
as well as fixing bugs. 

For the software development I 
used NodeJS and Angular framework that means Javascript
and Typescript. 
I also had to write some SQL queries.

# Realisation examples

## ICS files

I was extremely excited about the
task I was given. I had to attach an ICS file to emails
sent automatically by Ubikap in the letter of
convocation for a general meeting and the notification
emails. ICS files are generally shown as an invitation
to the event. You can easily add it to your Apple
calendar, Google calendar, Outlook, or wherever you
want it to appear like on the picture.
Why I was so excited to do this? That’s
because ICS files were my main field of study in my free time during September and October.
I have already done a project to represent the agenda I had in the Institute on my iPhone on
Python programming language. I also started to write my library to create these files.


I had to create a special Service in NodeJS.
Service is a bunch of custom functions you must write to describe
a logic of work with a special
type of object. So, I had to create the ICSInvite service where I 
described the rules of creating
these ICS files. To do this, I had to use an external 
library for JavaScript. While working on
this service, I almost had no difficulties.
However, I needed help adding the description in
French for objects my service created. 
I had to get some advice to add the logic for these
descriptions because it could have three different forms 
depending on two factors: the sending
status of the convocation letter and
the type of email we attached the file to, 
whether it's a
convocation letter
or a notification
letter.

A part of code with file creating function:
```javascript 
const CONFIG = require('config');
const ics = require('ics');
const logger = require('../utils/logger').getLogger();

let generateGeneralMeetingInviteAttachment = function (
    generalMeetingInfo,
    companyInfo,
    advisorInfos,
    attachTo,
    isConvocationSent = false) {

    if (generalMeetingInfo.date == null) {
        return null
    }

    if (generalMeetingInfo.date < new Date()) {
        return null
    }
    // preparing event values to put into the file

    let errorMessage = [
        'An error occurred when trying to create a ICS file for the email: '
    ];

    generalMeetingInfo = generalMeetingInfo.toDTO(); // to avoid sending secret information

    let generalMeetingSpaceUrl = CONFIG.front.publicUrl;

    let description = `Vous avez été convoqué(e) ` +//par ${advisorInfos.name} ` +
        `à l'assemblée générale de la société ${companyInfo.name}. ` +
        `Pour accéder à l'espace de l'assemblée générale, veuillez vous connecter sur ` +
        `${generalMeetingSpaceUrl}room/auth \n`;

    // this is a calendar event attribute which allows to update an event instead of creating a new one
    let sequence = 0;

    if (attachTo === 'notification') {
        sequence = 1
        if (isConvocationSent === true) {
            description += 'Vous pouvez trouver vos identifiants dans la lettre de convocation ou d' +
                'ans l\'email qui vous a été envoyée par l\'organisateur.'
        }
        else {
            description += 'Vous pouvez trouver vos identifiants' +
                'dans l\'email qui vous a été envoyée par l\'organisateur.'
        }
    }
    else {
        description += 'Vous pouvez trouver vos identifiants dans la lettre de convocation qui vous a été envoyée.'
    }

    let alarms = [];
    let startDate = new Date(generalMeetingInfo.date);
    let start = [
        startDate.getUTCFullYear(),
        startDate.getUTCMonth() + 1,
        startDate.getUTCDate(),
        startDate.getUTCHours(),
        startDate.getUTCMinutes()
    ];

    alarms.push({
        action: 'audio',
        description: 'Participez à l\'assemblée générale',
        trigger: { minutes: 10, before: true },
        repeat: 1,
        attachType: 'VALUE=URI',
        attach: 'Glass'
    });

    // to get the information about all the attributes of an event, see https://www.npmjs.com/package/ics
    const event = {
        start: start,
        status: 'CONFIRMED',
        duration: {
            hours: 1,
            minutes: 0
        },
        startInputType: 'utc',
        title: 'Assemblée générale de la société ' + companyInfo.name,
        description: description,
        organizer: {
            name: advisorInfos.name,
            email: advisorInfos.notificationMail
        },
        alarms: alarms,
        uid: generalMeetingInfo.key + advisorInfos.notificationMail.split('@')[0],
        sequence: sequence,
        attendees: null,
    };

    let eventObject = ics.createEvent(event);

    if (eventObject.error) {
        logger.error(errorMessage.push(eventObject.error.name, eventObject.error.message));
        return null
    }
    return {
        plaintext: eventObject.value,
        name: 'invitation',
        contentType: 'text/icalendar',
    }
};
module.exports = {
    generateGeneralMeetingInviteAttachment
}
```

It wasn’t that
hard; the hardest
part was to attach
the object my
service creates to
an email itself. I
had some problems
with file encoding
but after doing some research,
the problem had been resolved. Then it took me some time
to test it on different devices and in different environments

As a result, every invitee has something like this (depending on his device) attached to
his invitation to participate in a general meeting

![](./assets/experiences/ubikap/ics.png)

## Major changes in the database, default governances

The hardest task during my internship was this feature.
I had to do a function that creates
some governances by default for a company,
added to the Ubikap solution. That means,
whenever a user or Ubikap administrator, 
adds a company to the database, there already must
be a possibility to associate members of a company 
to the positions like “Président du Conseil
d'administration” or “Membre du conseil de surveillance”.
Any legal entity in France has its special legal status 
and depending on this status we have
different positions and different limitations 
for these positions. This was the first time I needed
help from someone who is not in the dev team of Ubikap.
I got help from an intern lawyer of
Ubikap, he sent me a document that described 
some different types of governances and
positions we could have for companies of different statuses. 
So, I had to work with a piece of
juridical information to understand what to do. 
Then I had to write some SQL queries
using this information to populate the database.


I will not lie, it was difficult for me to understand
what Ubikap wanted me to do, I asked
Ludovic (my tutor) a lot of questions about this task. 
The problem was a misunderstanding of a result I
want to have and of the initial database. 
This is the thing I must work on next time.
I started by creating a schema of new entities 
and their relationships for the database. This
conception part took me almost a week to do. 
Here are the schemas of this part of the database before and after:
![](./assets/experiences/ubikap/database_before.png)
![](./assets/experiences/ubikap/database_after.png)



As I said, I
used a lot of knowledge I had thanks to IUT Lumière. 
In practice, from time to time we must
break the rules and override the concepts
for a better performance of the application and avoid
the problems of its scalability.
If MME Chanvillard saw these schemas, she would find the
inefficiencies and disadvantages. 
However, the goal of any startup is to get 
all tasks done as
soon as possible to continue growing,
and this factor was taken into consideration.


Once the database conception was finished, 
I started to work on scripts. Every query to the
database from Ubikap must be asynchronous so I had to get familiar with asynchronous
functions, loops, callbacks and promises, and other programming concepts I have never used
before. In the beginning, I wrote an algorithm on pseudocode to show the logic I found to
Ludovic. He didn’t find it most convenient here and he was right. He also said at that moment
that I was “thinking in Python” but had to “think in JavaScript”. That changed my mind. I
appreciate these words. He was absolutely right. After my good experience with synchronous
Python (it is possible to write async code with Python, but It’s not the most powerful language
to do that), I was conservative and unimaginative about new concepts in programming. Well,
that took me two days to write and almost one week to debug the code and review it.

