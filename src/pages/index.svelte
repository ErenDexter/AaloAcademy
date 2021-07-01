<script>
  import {goto} from "@roxi/routify"
  import {Button, Footer} from "../components"

  const divH = window.innerHeight - 135;

</script>

<div style="height: {divH}px; width-auto" class="overflow-y-auto overflow-x-hidden xl:overflow-hidden">
  <section class="md:ml-28 lg:mt-16 text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">It's Education. It's Your Right.
        </h1>
        <p class="mb-8 leading-relaxed">Fill up your gaps according to your own customized exam routine. Browse over 10,000 questions with proper feedbacks made by our experts. Take exam and taste yourself anytime. No Registrations, No Signups. It's Free. Wanna support us? Just share with your friends.</p>
        <div class="flex flex-col xl:flex-row justify-center">
          <Button on:click={() => $goto("/exams")} string="Take Exam" /> 
        </div>
      </div>
      <div class="lg:max-w-lg w-full md:mr-10 xl:mr-32">
        <img class="object-cover object-center rounded" alt="hero" src="/images/logo.jpg">
      </div>
    </div>
  </section>
  <Footer /> 
  <br><br>
</div>


