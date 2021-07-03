<script>
import {
    onDestroy
} from "svelte";
import store from "../../../database/store"
import {
    goto
} from "@roxi/routify"

let data = {};
const unsub = store.subscribe(db => {
    data = db;
})

onDestroy(() => {
    unsub();
})

const divH = window.innerHeight - 205;

let exams;
exams = data.daily;

let icon = ["M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",

    "M22 12h-4l-3 9L9 3l-3 9H2",

    "M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8",

    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",

    "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",

    "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",

]

function returnId(link) {
    var linkArr = link.split("/");
    linkArr.pop();
    var filtered = linkArr[6].split('').filter(char => char !== '_');
    console.log(filtered.join(""))
    return filtered.join("");
}
</script>
<div class="flex justify-center text-2xl font-light px-5 mt-5">Aalo Academy - Daily Exam</div>
<div style="height: {divH}px;" class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-strech md:mr-14 md:ml-10 xl:ml-0 mt-5 gap-4 h-100 p-4 lg:pl-10 xl:pl-20 pr-4 overflow-y-auto">

    {#if exams.length > 0}
    {#each exams as exam}
    <section class="text-gray-600 body-font">
        <div on:click={$goto(`${window.location.pathname}/${exam.subId}_${returnId(exam.link)}`)} class= "w-full border relative border-gray-200 p-6 pl-7 rounded-lg transition duration-300 transform hover:scale-105 ease-in-out cursor-pointer shadow-md">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-primary mb-4">
                {#if exam.subId === 'phx1' || exam.subId === 'phx2' || exam.subId === 'chem1' || exam.subId === 'chem2' || exam.subId === 'hm1' || exam.subId === 'hm2'}
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d={exam.subId === "phx1" ? icon[0] : (exam.subId === "phx2" ? icon[1] : (exam.subId === 'hm1' ? icon[2] : (exam.subId === 'hm2' ? icon[3] : (exam.subId === "chem1" ? icon[4] : icon[5]))))}></path>
                </svg>
                {:else if exam.subId === 'bot'}
                <svg class="h-6 w-6 text-primary"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="3" width="8" height="14" rx="4" />  <rect x="12" y="7" width="8" height="10" rx="3" />  <line x1="8" y1="21" x2="8" y2="13" />  <line x1="16" y1="21" x2="16" y2="14" /></svg>
                    {:else}
                    <svg class="h-6 w-6 text-primary"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />  <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />  <path d="M12 11v2a14 14 0 0 0 2.5 8" />  <path d="M8 15a18 18 0 0 0 1.8 6" />  <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" /></svg>
                        {/if}

                        </div>
                        {#if localStorage.getItem(`${exam.subId}_${returnId(exam.link)}-taken`)}
                        <div class="absolute  top-8 right-5 text-base text-primary">Taken ✓</div>
                        {/if}
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{exam.courseName}<br>{exam.subject} - {exam.id}</h2>
                        <p class="leading-relaxed text-base">Syllabus: {exam.syllabus}<br> Full Marks: {exam.marks} <br> Time: {exam.time}</p>
                        </div>
                        </section>
                        {/each}
                        {:else}
                        <center class="text-2xl">Coming Soon...</center>
                        {/if}
                        <br>
                        </div>
