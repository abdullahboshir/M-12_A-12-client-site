import React, { useState } from 'react';
import AccordionUi from './AccordionUi';
import './blogs.css';

const AccordionDatas = () => {
    
    const blogsData = [
        {
            ques: "1. How does prototypical inheritance work?",
            ans: "প্রােটোটাইপিং হলাে একটি ইন্টারঅ্যাকটিভ ও পুনরাবৃত্তিযােগ্য প্রক্রিয়ায় নতুন অ্যাপ্লিকেশনসমূহের কার্যশীল মডেলগুলাের দ্রুত উন্নয়ন ও পরীক্ষণ। একে মাঝে মধ্যে  র‌্যাপিড অ্যাপ্লিকেশন ডিজাইন (RAD) বলা হয়। এটি সিস্টেম ডিজাইনকে সহজ ও দ্রুত করে। বর্তমানে অধিকাংশ সিস্টেম এনালিস্ট সিস্টেমকে বিস্তারিতভাবে ডিজাইন করার জন্য প্রটোটাইপিং মডেল ব্যবহার করে থাকেন। প্রটোটাইপিংকে মাঝে মাঝে ধারণার প্রমানও বলা হয়।  এন্ড ইউজার এবং/অথবা ইনফরমেশন সিস্টেম বিশেষজ্ঞগণ ইন্টারঅ্যাকটিভ ডিজাইনে অ্যাপ্লিকেশন ডেভেলপমেন্ট টুলসমূহ ব্যবহার করে এবং ইনফরমেশন সিস্টেম উপাদানগুলাের নমুনাগুলােকে পরীক্ষা করে যা এন্ড ইউজারদের ব্যবসায়িক প্রয়ােজনগুলােকে পূরণ করে।"
        },
        {
            ques: "2. What is a unit test? Why should write unit tests?",
            ans: "UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end."
        },
        {
            ques: "3. How does prototypical inheritance work?",
            ans: " Javascript সবকিছুই একটি object | এমনকি একটি class তৈরি করার সময় একটি object লিটারাল বা কনস্ট্রাক্টর function মাধ্যমে একটি object | এভাবেই জাভাস্ক্রিপ্ট ক্লাস-ভিত্তিক প্রোগ্রামিং করে অন্যান্য প্রথাগত object-orented প্রোগ্রামিং ল্যাঙ্গুয়েজ যেখানে তারা 'class' এবং 'inheritance' keyword ব্যবহার করে | Javascript class ভিত্তিক প্রোগ্রামিং এবং অন্যান্য ঐতিহ্যগত class ভিত্তিক প্রোগ্রামিং ভাষার সংস্করণ একই ধারণার সাথে কাজ করে কিন্তু ঠিক একই রকম কাজ করে না। syntax, এবং এটি কিভাবে কাজ করে। জাভাস্ক্রিপ্টের class ভিত্তিক প্রোগ্রামিং সংস্করণের সুবিধা এবং অসুবিধা নিয়েও বিতর্ক রয়েছে | So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern."
        },
    ]



    const [clicked, setClicked] = useState("0");

    const handleToggole = index => {
        if(clicked === index){
            return setClicked("0")
        }
        setClicked(index)
    };

    return (
        <div className='accordion1'>
            <h2 className='text-4xl' style={{textAlign: "center", color: "black", marginBottom: "15px"}}>Answer to the questions</h2>

            <ul className='accordion' style={{padding: "0"}}>
             {
                blogsData.map((data, index) => <AccordionUi
                active={clicked === index}
                onToggle = {() => handleToggole(index)}
                data = {data}
                ></AccordionUi>)
             }
            </ul>
        </div>
    );
};

export default AccordionDatas;