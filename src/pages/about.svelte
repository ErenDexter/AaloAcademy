<script>
import {
    onDestroy
} from "svelte"

import store from "../database/store"
import {Footer} from "../components"

const divH = window.innerHeight - 135;

let members = {}, qs = {};
const unsub = store.subscribe(db => {
    members = db.team.coreMembers;
    qs = db.team.questionSetters;

})




onDestroy(() => {
    unsub();
})
</script>

<section class="text-gray-600 body-font">

    <div  class="container lg:px-24 px-5 py-16 mx-auto overflow-y-auto overflow-x-hidden" style="height: {divH}px;">
        <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-lg">We seek an Education System which can turn data into information, information into knowledge and knowledge into wisdom.</p>
        </div>

        <div class="flex flex-wrap -m-4 xl:ml-14">
            {#each members as member}

            <div class="p-4 xl:w-1/3 lg:w-1/2 w-full">
                <div class="h-full flex flex-row items-center justify-center text-left">
                    <img alt="dp" class="flex-shrink-0 rounded-lg w-32 h-32 object-cover object-center sm:mb-0 mb-4" src={`/images/blog/dp/${member.image}.jpg`}>
                    <div class="flex-grow pl-8">
                        <h2 class="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                        <h3 class="text-gray-500 mb-3">{member.rank}</h3>
                        <p class="mb-4"></p>
                        <span class="inline-flex">
                            <a href={member.fbProfile} target="_blank" class="text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="20px" height="20px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067z" fill="#4267B2"/></g></svg>
                            </a>
                            <a href={`mailto:${member.email}`} class="ml-2 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="21px" height="21px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61c-1.99 0-3.61-1.62-3.61-3.61c0-1.99 1.62-3.61 3.61-3.61c1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024l-1.617-1.879l-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54c0-5.26 4.28-9.54 9.54-9.54c5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568c-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93A6.076 6.076 0 0 0 5.93 12A6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792a3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821c.719-.547 1.256-1.336 1.553-2.285c.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457c0-6.617-5.383-12-12-12" fill="#626262"/></svg>
                            </a>
                            <a href={`tel:${member.phone}`} class="ml-2 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="20px" height="20px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200"><path d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0zM384.375 238.33c12.362-.729 23.536 6.66 32.007 19.775l82.031 155.566c8.637 18.434 3.729 38.172-9.155 51.343l-37.573 37.573c-2.319 3.178-3.845 6.757-3.882 10.693c14.409 55.775 58.117 107.223 96.681 142.603c38.562 35.38 80.009 83.281 133.812 94.629c6.65 1.855 14.797 2.52 19.556-1.903l43.652-44.458c15.068-11.421 36.866-16.956 52.954-7.617h.732l148.021 87.378c21.728 13.619 23.979 39.944 8.423 55.957L849.683 941.016c-15.056 15.44-35.058 20.631-54.491 20.654c-85.948-2.575-167.158-44.759-233.862-88.11c-109.49-79.653-209.923-178.446-272.975-297.803c-24.182-50.05-52.589-113.91-49.878-169.774c.242-21.016 5.928-41.605 20.728-55.151l101.953-101.953c7.942-6.758 15.799-10.111 23.217-10.549z" fill="#1b9849"/></svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>    
            {/each}
        </div>

        <div class="flex flex-wrap -m-4 mt-32 xl:ml-14">
            {#each qs as member}

            <div class="p-4 xl:w-1/3 lg:w-1/2 w-full">
                <div class="h-full flex flex-row items-center justify-center text-left">
                    <img alt="dp" class="flex-shrink-0 rounded-lg w-32 h-32 object-cover object-center sm:mb-0 mb-4" src={`/images/blog/dp/${member.image}.jpg`}>
                    <div class="flex-grow pl-8">
                        <h2 class="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                        <h3 class="text-gray-500 mb-3">{member.rank}</h3>
                        <p class="mb-4"></p>
                        <span class="inline-flex">
                            <a href={member.fbProfile} target="_blank" class="text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="20px" height="20px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067z" fill="#4267B2"/></g></svg>
                            </a>
                            <a href={`mailto:${member.email}`} class="ml-2 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="21px" height="21px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61c-1.99 0-3.61-1.62-3.61-3.61c0-1.99 1.62-3.61 3.61-3.61c1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024l-1.617-1.879l-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54c0-5.26 4.28-9.54 9.54-9.54c5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568c-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93A6.076 6.076 0 0 0 5.93 12A6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792a3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821c.719-.547 1.256-1.336 1.553-2.285c.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457c0-6.617-5.383-12-12-12" fill="#626262"/></svg>
                            </a>
                            <a href={`tel:${member.phone}`} class="ml-2 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="20px" height="20px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200"><path d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0zM384.375 238.33c12.362-.729 23.536 6.66 32.007 19.775l82.031 155.566c8.637 18.434 3.729 38.172-9.155 51.343l-37.573 37.573c-2.319 3.178-3.845 6.757-3.882 10.693c14.409 55.775 58.117 107.223 96.681 142.603c38.562 35.38 80.009 83.281 133.812 94.629c6.65 1.855 14.797 2.52 19.556-1.903l43.652-44.458c15.068-11.421 36.866-16.956 52.954-7.617h.732l148.021 87.378c21.728 13.619 23.979 39.944 8.423 55.957L849.683 941.016c-15.056 15.44-35.058 20.631-54.491 20.654c-85.948-2.575-167.158-44.759-233.862-88.11c-109.49-79.653-209.923-178.446-272.975-297.803c-24.182-50.05-52.589-113.91-49.878-169.774c.242-21.016 5.928-41.605 20.728-55.151l101.953-101.953c7.942-6.758 15.799-10.111 23.217-10.549z" fill="#1b9849"/></svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>    
            {/each}
        </div>
        <Footer />
    </div>
</section>
