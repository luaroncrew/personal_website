import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { OneExperienceComponent } from "./one-experience/one-experience.component";

export interface Experience {
  name: string;
  descriptionPath: string;
  mainImagePath: string;
}

const EXPERIENCES: Experience []  = [
  {
    name: 'Ubikap',
    descriptionPath:
      "# Ubikap | Full stack developer (internship)\n" +
      "\n" +
      "\n" +
      "```#JavaScript``` ```#FirstExperienceInFrance``` ```#Debugger```\n" +
      "```#Angular``` ```#SQL``` ```#NodeJS``` ```#Startup```\n" +
      "\n" +
      "\n" +
      "Ubikap is a French startup born in 2021. They are\n" +
      "developing a solution for lawyers and accountants, that\n" +
      "helps dematerialize and automate \n" +
      "almost all paperwork in their jobs.\n" +
      "\n" +
      "\n" +
      "## My missions\n" +
      "My main mission was to concept and develop new features\n" +
      "as well as fixing bugs. \n" +
      "\n" +
      "For the software development I \n" +
      "used NodeJS and Angular framework that means Javascript\n" +
      "and Typescript. \n" +
      "I also had to write some SQL queries.\n" +
      "\n" +
      "# Realisation examples\n" +
      "\n" +
      "## ICS files\n" +
      "\n" +
      "I was extremely excited about the\n" +
      "task I was given. I had to attach an ICS file to emails\n" +
      "sent automatically by Ubikap in the letter of\n" +
      "convocation for a general meeting and the notification\n" +
      "emails. ICS files are generally shown as an invitation\n" +
      "to the event. You can easily add it to your Apple\n" +
      "calendar, Google calendar, Outlook, or wherever you\n" +
      "want it to appear like on the picture.\n" +
      "Why I was so excited to do this? That’s\n" +
      "because ICS files were my main field of study in my free time during September and October.\n" +
      "I have already done a project to represent the agenda I had in the Institute on my iPhone on\n" +
      "Python programming language. I also started to write my library to create these files.\n" +
      "\n" +
      "\n" +
      "I had to create a special Service in NodeJS.\n" +
      "Service is a bunch of custom functions you must write to describe\n" +
      "a logic of work with a special\n" +
      "type of object. So, I had to create the ICSInvite service where I \n" +
      "described the rules of creating\n" +
      "these ICS files. To do this, I had to use an external \n" +
      "library for JavaScript. While working on\n" +
      "this service, I almost had no difficulties.\n" +
      "However, I needed help adding the description in\n" +
      "French for objects my service created. \n" +
      "I had to get some advice to add the logic for these\n" +
      "descriptions because it could have three different forms \n" +
      "depending on two factors: the sending\n" +
      "status of the convocation letter and\n" +
      "the type of email we attached the file to, \n" +
      "whether it's a\n" +
      "convocation letter\n" +
      "or a notification\n" +
      "letter.\n" +
      "\n" +
      "A part of code with file creating function:\n" +
      "```javascript \n" +
      "const CONFIG = require('config');\n" +
      "const ics = require('ics');\n" +
      "const logger = require('../utils/logger').getLogger();\n" +
      "\n" +
      "let generateGeneralMeetingInviteAttachment = function (\n" +
      "    generalMeetingInfo,\n" +
      "    companyInfo,\n" +
      "    advisorInfos,\n" +
      "    attachTo,\n" +
      "    isConvocationSent = false) {\n" +
      "\n" +
      "    if (generalMeetingInfo.date == null) {\n" +
      "        return null\n" +
      "    }\n" +
      "\n" +
      "    if (generalMeetingInfo.date < new Date()) {\n" +
      "        return null\n" +
      "    }\n" +
      "    // preparing event values to put into the file\n" +
      "\n" +
      "    let errorMessage = [\n" +
      "        'An error occurred when trying to create a ICS file for the email: '\n" +
      "    ];\n" +
      "\n" +
      "    generalMeetingInfo = generalMeetingInfo.toDTO(); // to avoid sending secret information\n" +
      "\n" +
      "    let generalMeetingSpaceUrl = CONFIG.front.publicUrl;\n" +
      "\n" +
      "    let description = `Vous avez été convoqué(e) ` +//par ${advisorInfos.name} ` +\n" +
      "        `à l'assemblée générale de la société ${companyInfo.name}. ` +\n" +
      "        `Pour accéder à l'espace de l'assemblée générale, veuillez vous connecter sur ` +\n" +
      "        `${generalMeetingSpaceUrl}room/auth \\n`;\n" +
      "\n" +
      "    // this is a calendar event attribute which allows to update an event instead of creating a new one\n" +
      "    let sequence = 0;\n" +
      "\n" +
      "    if (attachTo === 'notification') {\n" +
      "        sequence = 1\n" +
      "        if (isConvocationSent === true) {\n" +
      "            description += 'Vous pouvez trouver vos identifiants dans la lettre de convocation ou d' +\n" +
      "                'ans l\\'email qui vous a été envoyée par l\\'organisateur.'\n" +
      "        }\n" +
      "        else {\n" +
      "            description += 'Vous pouvez trouver vos identifiants' +\n" +
      "                'dans l\\'email qui vous a été envoyée par l\\'organisateur.'\n" +
      "        }\n" +
      "    }\n" +
      "    else {\n" +
      "        description += 'Vous pouvez trouver vos identifiants dans la lettre de convocation qui vous a été envoyée.'\n" +
      "    }\n" +
      "\n" +
      "    let alarms = [];\n" +
      "    let startDate = new Date(generalMeetingInfo.date);\n" +
      "    let start = [\n" +
      "        startDate.getUTCFullYear(),\n" +
      "        startDate.getUTCMonth() + 1,\n" +
      "        startDate.getUTCDate(),\n" +
      "        startDate.getUTCHours(),\n" +
      "        startDate.getUTCMinutes()\n" +
      "    ];\n" +
      "\n" +
      "    alarms.push({\n" +
      "        action: 'audio',\n" +
      "        description: 'Participez à l\\'assemblée générale',\n" +
      "        trigger: { minutes: 10, before: true },\n" +
      "        repeat: 1,\n" +
      "        attachType: 'VALUE=URI',\n" +
      "        attach: 'Glass'\n" +
      "    });\n" +
      "\n" +
      "    // to get the information about all the attributes of an event, see https://www.npmjs.com/package/ics\n" +
      "    const event = {\n" +
      "        start: start,\n" +
      "        status: 'CONFIRMED',\n" +
      "        duration: {\n" +
      "            hours: 1,\n" +
      "            minutes: 0\n" +
      "        },\n" +
      "        startInputType: 'utc',\n" +
      "        title: 'Assemblée générale de la société ' + companyInfo.name,\n" +
      "        description: description,\n" +
      "        organizer: {\n" +
      "            name: advisorInfos.name,\n" +
      "            email: advisorInfos.notificationMail\n" +
      "        },\n" +
      "        alarms: alarms,\n" +
      "        uid: generalMeetingInfo.key + advisorInfos.notificationMail.split('@')[0],\n" +
      "        sequence: sequence,\n" +
      "        attendees: null,\n" +
      "    };\n" +
      "\n" +
      "    let eventObject = ics.createEvent(event);\n" +
      "\n" +
      "    if (eventObject.error) {\n" +
      "        logger.error(errorMessage.push(eventObject.error.name, eventObject.error.message));\n" +
      "        return null\n" +
      "    }\n" +
      "    return {\n" +
      "        plaintext: eventObject.value,\n" +
      "        name: 'invitation',\n" +
      "        contentType: 'text/icalendar',\n" +
      "    }\n" +
      "};\n" +
      "module.exports = {\n" +
      "    generateGeneralMeetingInviteAttachment\n" +
      "}\n" +
      "```\n" +
      "\n" +
      "It wasn’t that\n" +
      "hard; the hardest\n" +
      "part was to attach\n" +
      "the object my\n" +
      "service creates to\n" +
      "an email itself. I\n" +
      "had some problems\n" +
      "with file encoding\n" +
      "but after doing some research,\n" +
      "the problem had been resolved. Then it took me some time\n" +
      "to test it on different devices and in different environments\n" +
      "\n" +
      "As a result, every invitee has something like this (depending on his device) attached to\n" +
      "his invitation to participate in a general meeting\n" +
      "\n" +
      "![](./assets/experiences/ubikap/ics.png)\n" +
      "\n" +
      "## Major changes in the database, default governances\n" +
      "\n" +
      "The hardest task during my internship was this feature.\n" +
      "I had to do a function that creates\n" +
      "some governances by default for a company,\n" +
      "added to the Ubikap solution. That means,\n" +
      "whenever a user or Ubikap administrator, \n" +
      "adds a company to the database, there already must\n" +
      "be a possibility to associate members of a company \n" +
      "to the positions like “Président du Conseil\n" +
      "d'administration” or “Membre du conseil de surveillance”.\n" +
      "Any legal entity in France has its special legal status \n" +
      "and depending on this status we have\n" +
      "different positions and different limitations \n" +
      "for these positions. This was the first time I needed\n" +
      "help from someone who is not in the dev team of Ubikap.\n" +
      "I got help from an intern lawyer of\n" +
      "Ubikap, he sent me a document that described \n" +
      "some different types of governances and\n" +
      "positions we could have for companies of different statuses. \n" +
      "So, I had to work with a piece of\n" +
      "juridical information to understand what to do. \n" +
      "Then I had to write some SQL queries\n" +
      "using this information to populate the database.\n" +
      "\n" +
      "\n" +
      "I will not lie, it was difficult for me to understand\n" +
      "what Ubikap wanted me to do, I asked\n" +
      "Ludovic (my tutor) a lot of questions about this task. \n" +
      "The problem was a misunderstanding of a result I\n" +
      "want to have and of the initial database. \n" +
      "This is the thing I must work on next time.\n" +
      "I started by creating a schema of new entities \n" +
      "and their relationships for the database. This\n" +
      "conception part took me almost a week to do. \n" +
      "Here are the schemas of this part of the database before and after:\n" +
      "![](./assets/experiences/ubikap/database_before.png) \n" +
      "![](./assets/experiences/ubikap/database_after.png)\n" +
      "\n" +
      "\n" +
      "\n" +
      "As I said, I\n" +
      "used a lot of knowledge I had thanks to IUT Lumière. \n" +
      "In practice, from time to time we must\n" +
      "break the rules and override the concepts\n" +
      "for a better performance of the application and avoid\n" +
      "the problems of its scalability.\n" +
      "If MME Chanvillard saw these schemas, she would find the\n" +
      "inefficiencies and disadvantages. \n" +
      "However, the goal of any startup is to get \n" +
      "all tasks done as\n" +
      "soon as possible to continue growing,\n" +
      "and this factor was taken into consideration.\n" +
      "\n" +
      "\n" +
      "Once the database conception was finished, \n" +
      "I started to work on scripts. Every query to the\n" +
      "database from Ubikap must be asynchronous so I had to get familiar with asynchronous\n" +
      "functions, loops, callbacks and promises, and other programming concepts I have never used\n" +
      "before. In the beginning, I wrote an algorithm on pseudocode to show the logic I found to\n" +
      "Ludovic. He didn’t find it most convenient here and he was right. He also said at that moment\n" +
      "that I was “thinking in Python” but had to “think in JavaScript”. That changed my mind. I\n" +
      "appreciate these words. He was absolutely right. After my good experience with synchronous\n" +
      "Python (it is possible to write async code with Python, but It’s not the most powerful language\n" +
      "to do that), I was conservative and unimaginative about new concepts in programming. Well,\n" +
      "that took me two days to write and almost one week to debug the code and review it. Some of\n" +
      "\n",
    mainImagePath: '../assets/experiences/ubikap/logo.png'
  },
  {
    name: 'Yandex',
    descriptionPath: '../assets/experiences/ubikap/logo.png',
    mainImagePath: '../assets/experiences/yandex/img.png'
  },
  {
    name: 'Yandex',
    descriptionPath: '../assets/experiences/ubikap/logo.png',
    mainImagePath: '../assets/experiences/yandex/img.png'
  },
  {
    name: 'Yandex',
    descriptionPath: '../assets/experiences/ubikap/logo.png',
    mainImagePath: '../assets/experiences/yandex/img.png'
  }
];

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  experiences = EXPERIENCES;

  constructor(public dialog: MatDialog) {}
  openDialog(experience: Experience): void {
    const dialogRef = this.dialog.open(OneExperienceComponent, {
      width: '85%',
      height: '75%',
      data: experience
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.experiences = EXPERIENCES
  }
}
