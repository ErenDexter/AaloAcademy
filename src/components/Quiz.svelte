<div>

    <div class="border rounded border-grey-500 py-2 px-3">
        <div class="text-xl font-normal flex justify-center">{exam.examinfo.chapter}</div>
        <div class="text-lg font-normal flex justify-center">{exam.examinfo.subject}</div>
        <div class="flex flex-wrap justify-center space-x-2">
            <div class="text-base font-light flex justify-center">Marks: {exam.examinfo.marks}</div>
            <div class="text-base font-light flex justify-center">Questions: {exam.examinfo.questions}</div>
            <div class="text-base font-light flex justify-center">Source: {exam.examinfo.source}</div>
        </div>
    </div>

    {#each exam.questions as question, i}
        <div class="border rounded border-grey-500 py-2 px-3 my-2">
            {question.statement}
        </div>
    {/each}

</div>

<style>

</style>


<script>
  import Katex from "./Katex.svelte"

    const exam = {
        examinfo: {
            subject: 'Higher Math 2nd Paper',
            chapter: 'Real Number',
            marks: '15',
            questions: '3',
            source: 'Question Bank'
        },
        questions: [
            {
                type: "mcq",
                statement: "$\frac{x+4}{x+3} > \frac{x-6}{x-7}$  অসমতাটির সমাধান হলো-",
                optionType: "text", 
                options: [
                    {
                        value: "$-4 < x <6$",
                        correct: false
                    },
                    {
                        value: "$-4 \le x \le 6$",
                        correct: false
                    },
                    {
                        value: "$-3<x<7$",
                        correct: true
                    },
                    {
                        value: "$x<-3$ and $ x>7",
                        correct: false
                    }
                ],
                solution: "Option test.",
                OriginExtra: "KUET[17-18]" 
            }

        ]
    }

</script>

