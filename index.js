const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

let monthNames = ["Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug", "Sep", "Oct","Nov","Dec"];

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
# Hi there! <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Hi.gif" width="35" />


<p align="center">
  <a href="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" height="30" style="display:inline-block;" />
  </a>
  <a href="https://linkedin.com/in/islam-ben-lokrichi-2973492ba" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" height="30" style="display:inline-block;" />
  </a>
  <a href="https://discord.com/users/PatikaX#6262" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg" height="30" style="display:inline-block;" />
  </a>
</p>

![](https://camo.githubusercontent.com/992babdffd8c74a1502de375fbdf7e4d54773242/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f53576f536b4e36447854737a71494b4571762f67697068792e676966)

### <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Developer.gif" width="45" /> About Me:
- 🏦 I'm a Junior Software Engineer – Backend Systems Java Spring
  <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
- 🧠 I’m early in my career, but I build real world projects :
    - Real-time collaborative editors (WebSockets + GraphQL + AI)
    - Multi-module microservices EndToEnd Reactive (Spring Webflux)
    - Hybrid PostgreSQL + MongoDB storage
    - CI/CD pipelines (GitHub Actions)
    - Docker/Kubernetes (Minikube)
- 💻 I use daily: **.js**, **.java**, **.kt**,  **.sql**
- 📖 I am currently reading **"Cracking the JAVA INTERVIEWS WITH SUMIT"** by SUMIT
- 💬 Talk to me about Backend engineering, system design, real-time features, Docker
- ♟ I unwind with chess and strategy games when I’m not coding.
- 🧑‍💻 Tech I work on :


<p align="center">
      <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=java,spring,nodejs,git,kubernetes,elasticsearch,azure,aws,docker,mysql,mongodb" />
      </a>
</p>

---
### 🚀 My contributions! Whose <img src= "https://c.tenor.com/BczFoyx41WoAAAAj/swallowed-the-mighty-ones.gif" width= "30" height= "30"> snake is this!? 😭
![Contribution grid snake animation](https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg)

<!--START_SECTION:waka-->

<!--END_SECTION:waka-->

⏳ **Year Progress:** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)}% as on ⏰ ${(new Date().getDate())+'-'+ monthNames[new Date().getMonth()]+'-'+new Date().getFullYear()}

---


---

### <img alt="GIF" src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/hmm.gif" width="20" /> A Famous Fact/Quote:
<a href="https://github.com/marketplace/actions/quote-readme">
<!--STARTS_HERE_QUOTE_README-->
• <i>“Computer viruses are an urban legend.”— Peter Norton, 1988   </i>
<!--ENDS_HERE_QUOTE_README-->
</a>

---

### <img align ='center' src='https://media2.giphy.com/media/UQDSBzfyiBKvgFcSTw/giphy.gif?cid=ecf05e47p3cd513axbek3f56ti3jzizq8hincw20jauyyfyw&rid=giphy.gif' width ='29' /> Here's some humor for you:
<img src="https://readme-jokes.vercel.app/api" alt="Error fetching humour, Refresh again to view the Card" width = '11000' />

`
console.log(readme)



