let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "not_applied"
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create modern web experiences for clients using Webflow & design systems.",
    status: "not_applied"
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Build dashboards and visualizations for product & business teams.",
    status: "not_applied"
  },
  {
    id: 4,
    companyName: "CloudNest",
    position: "Frontend Developer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$95,000 - $130,000",
    description: "Build responsive UI using modern frontend tools and APIs.",
    status: "not_applied"
  },
  {
    id: 5,
    companyName: "BrightUI Studio",
    position: "UI/UX Designer",
    location: "New York, NY",
    type: "Contract",
    salary: "$60/hr - $85/hr",
    description: "Design clean product interfaces, prototypes, and UI kits.",
    status: "not_applied"
  },
  {
    id: 6,
    companyName: "SecurePay",
    position: "QA Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $95,000",
    description: "Test web apps, write test cases, and help improve product quality.",
    status: "not_applied"
  },
  {
    id: 7,
    companyName: "NextWave Apps",
    position: "Full Stack Developer",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Work on backend + frontend features and deploy updates regularly.",
    status: "not_applied"
  },
  {
    id: 8,
    companyName: "PixelCraft",
    position: "WordPress Developer",
    location: "Remote",
    type: "Part-time",
    salary: "$40/hr - $60/hr",
    description: "Build and customize WordPress websites with clean UI and performance focus.",
    status: "not_applied"
  }
];

let currentTab = "all"; 
let jobsList = document.getElementById("jobsList");

let countTotal = document.getElementById("countTotal");
let countInterview = document.getElementById("countInterview");
let countRejected = document.getElementById("countRejected");

let tabJobsCount = document.getElementById("tabJobsCount");

let tabAll = document.getElementById("tabAll");
let tabInterview = document.getElementById("tabInterview");
let tabRejected = document.getElementById("tabRejected");

tabAll.addEventListener("click", function () {
  currentTab = "all";
  render();
});

tabInterview.addEventListener("click", function () {
  currentTab = "interview";
  render();
});

tabRejected.addEventListener("click", function () {
  currentTab = "rejected";
  render();
});

function getFilteredJobs() {
  if (currentTab === "all") {
    return jobs;
  }


  let filtered = jobs.filter(function (job) {
    return job.status === currentTab;
  });

  return filtered;
}

function updateDashboardCounts() {
  countTotal.textContent = jobs.length;

  let interviewCount = jobs.filter(function (job) {
    return job.status === "interview";
  }).length;

  let rejectedCount = jobs.filter(function (job) {
    return job.status === "rejected";
  }).length;

  countInterview.textContent = interviewCount;
  countRejected.textContent = rejectedCount;
}

function setActiveTabStyle() {

  tabAll.classList.remove("btn-primary");
  tabInterview.classList.remove("btn-primary");
  tabRejected.classList.remove("btn-primary");


  if (currentTab === "all") tabAll.classList.add("btn-primary");
  if (currentTab === "interview") tabInterview.classList.add("btn-primary");
  if (currentTab === "rejected") tabRejected.classList.add("btn-primary");
}

function renderEmptyState() {
  jobsList.innerHTML = `
    <div class="card bg-base-100 shadow">
      <div class="card-body items-center text-center py-14">
        <div class="text-5xl mb-3">📄</div>
        <p class="text-lg font-semibold">No jobs available</p>
        <p class="text-sm opacity-70">Check back soon for new job opportunities</p>
      </div>
    </div>
  `;
}

function renderJobs() {
  let filteredJobs = getFilteredJobs();


  tabJobsCount.textContent = filteredJobs.length + " jobs";


  jobsList.innerHTML = "";

  if (filteredJobs.length === 0) {
    renderEmptyState();
    return;
  }


  filteredJobs.forEach(function (job) {

    let badgeHTML = `<span class="badge badge-neutral">NOT APPLIED</span>`;
    if (job.status === "interview") badgeHTML = `<span class="badge badge-success">INTERVIEW</span>`;
    if (job.status === "rejected") badgeHTML = `<span class="badge badge-error">REJECTED</span>`;


    let interviewBtnClass = "btn btn-outline btn-success btn-sm";
    let rejectedBtnClass = "btn btn-outline btn-error btn-sm";

    if (job.status === "interview") interviewBtnClass = "btn btn-success btn-sm";
    if (job.status === "rejected") rejectedBtnClass = "btn btn-error btn-sm";

    let card = document.createElement("div");
    card.className = "card bg-base-100 shadow";

    card.innerHTML = `
      <div class="card-body gap-2">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="font-bold text-lg">${job.companyName}</h3>
            <p class="text-sm opacity-70">${job.position}</p>
            <p class="text-xs opacity-70 mt-2">
              ${job.location} • ${job.type} • ${job.salary}
            </p>
          </div>

          <button id="delete-${job.id}" class="btn btn-ghost btn-sm" title="Delete">
            🗑️
          </button>
        </div>

        <div class="mt-1">${badgeHTML}</div>

        <p class="text-sm opacity-80 mt-2">${job.description}</p>

        <div class="flex flex-wrap gap-2 mt-3">
          <button id="interview-${job.id}" class="${interviewBtnClass}">
            Interview
          </button>
          <button id="rejected-${job.id}" class="${rejectedBtnClass}">
            Rejected
          </button>
        </div>
      </div>
    `;

    jobsList.appendChild(card);



    
    document.getElementById("interview-" + job.id).addEventListener("click", function () {
      job.status = "interview"; 
      render();                 
    });

  
    document.getElementById("rejected-" + job.id).addEventListener("click", function () {
      job.status = "rejected"; 
      render();
    });

   
    document.getElementById("delete-" + job.id).addEventListener("click", function () {
      jobs = jobs.filter(function (j) {
        return j.id !== job.id;
      });
      render();
    });
  });
}


function render() {
  updateDashboardCounts(); 
  setActiveTabStyle();     
  renderJobs();            
}


render();