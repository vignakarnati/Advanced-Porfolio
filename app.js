// App JS: handles interactivity, data rendering and animations

// Data from JSON (embedded here for simplicity; could be fetched)
const data = {
  personalInfo: {
    name: "Alex Johnson",
    roles: ["Web Developer", "UI/UX Designer", "Software Engineer", "Digital Creator"],
  },
  skills: {
    technical: [
      { name: "JavaScript", level: 95 },
      { name: "React.js", level: 92 },
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "TypeScript", level: 87 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 80 },
      { name: "Docker", level: 78 },
    ],
    design: [
      { name: "UI/UX Design", level: 90 },
      { name: "Figma", level: 88 },
      { name: "Adobe Creative Suite", level: 85 },
      { name: "Responsive Design", level: 93 },
      { name: "Prototyping", level: 87 },
    ],
    tools: [
      { name: "Git/GitHub", level: 95 },
      { name: "VS Code", level: 98 },
      { name: "AWS", level: 82 },
      { name: "Webpack", level: 80 },
      { name: "Jest", level: 85 },
    ],
  },
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: "Complete e-commerce solution with React frontend, Node.js backend, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Frontend",
      description: "Modern task management application with drag-and-drop functionality and real-time updates.",
      technologies: ["React", "TypeScript", "Socket.io", "CSS3"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Dashboard",
      category: "UI/UX",
      description: "Interactive dashboard design for portfolio management with data visualization.",
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "API Gateway Service",
      category: "Backend",
      description: "Microservices API gateway with authentication, rate limiting, and monitoring.",
      technologies: ["Node.js", "Express", "Redis", "Docker"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Mobile App Design",
      category: "UI/UX",
      description: "Complete mobile app design system with user research and prototyping.",
      technologies: ["Figma", "Sketch", "InVision", "Principle"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Real-time Chat App",
      category: "Full Stack",
      description: "Real-time messaging application with group chats and file sharing capabilities.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      demoLink: "#",
      codeLink: "#",
    },
  ],
  certificates: [
    {
      id: 1,
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      date: "2024-03-15",
      category: "Technical",
      credentialId: "AWS-PSA-12345",
      verificationLink: "#",
      description: "Advanced certification in AWS cloud architecture and solutions design.",
      image:
        "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      date: "2023-11-22",
      category: "Professional",
      credentialId: "GOOGLE-UX-67890",
      verificationLink: "#",
      description: "Comprehensive UX design certification covering user research, prototyping, and testing.",
      image:
        "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Master of Computer Science",
      issuer: "Stanford University",
      date: "2022-06-18",
      category: "Academic",
      credentialId: "STAN-CS-2022-456",
      verificationLink: "#",
      description: "Advanced degree in Computer Science with specialization in Software Engineering.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024-01-10",
      category: "Technical",
      credentialId: "META-REACT-789",
      verificationLink: "#",
      description: "Professional certification in React.js development and best practices.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Machine Learning Workshop",
      issuer: "MIT",
      date: "2023-08-05",
      category: "Training",
      credentialId: "MIT-ML-2023-123",
      verificationLink: "#",
      description: "Intensive workshop on machine learning algorithms and applications.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Agile Project Management",
      issuer: "Scrum Alliance",
      date: "2023-12-12",
      category: "Professional",
      credentialId: "SA-APM-456789",
      verificationLink: "#",
      description: "Certification in Agile methodologies and Scrum framework implementation.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
  ],
  documents: [
    {
      id: 1,
      title: "Senior Developer Offer Letter",
      type: "Offer Letter",
      issuer: "TechCorp Inc.",
      date: "2024-02-28",
      status: "Accepted",
      description:
        "Offer letter for Senior Full Stack Developer position with competitive compensation package.",
      icon: "📄",
    },
    {
      id: 2,
      title: "Letter of Recommendation",
      type: "Recommendation",
      issuer: "Dr. Sarah Mitchell, Stanford University",
      date: "2022-05-20",
      status: "Active",
      description:
        "Academic recommendation letter highlighting research contributions and technical excellence.",
      icon: "⭐",
    },
    {
      id: 3,
      title: "Excellence in Innovation Award",
      type: "Award",
      issuer: "InnovateTech Solutions",
      date: "2023-12-15",
      status: "Received",
      description:
        "Recognition for developing innovative solutions that improved system efficiency by 40%.",
      icon: "🏆",
    },
    {
      id: 4,
      title: "Performance Review - Outstanding",
      type: "Review",
      issuer: "TechCorp Inc.",
      date: "2023-12-31",
      status: "Completed",
      description:
        "Annual performance review with outstanding ratings across all evaluation criteria.",
      icon: "📊",
    },
    {
      id: 5,
      title: "Lead Developer Offer",
      type: "Offer Letter",
      issuer: "StartupXYZ",
      date: "2023-09-10",
      status: "Declined",
      description:
        "Offer letter for Lead Developer role with equity compensation and remote work options.",
      icon: "📄",
    },
    {
      id: 6,
      title: "Academic Transcript",
      type: "Academic",
      issuer: "Stanford University",
      date: "2022-06-18",
      status: "Official",
      description:
        "Official academic transcript showing GPA of 3.9/4.0 with Dean's List recognition.",
      icon: "🎓",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      content:
        "Alex is an exceptional developer who consistently delivers high-quality solutions. His attention to detail and collaborative approach make him invaluable to any team.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b776?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CTO at InnovateTech",
      content:
        "Working with Alex was a game-changer for our platform. His expertise in full-stack development and user experience design helped us achieve our goals ahead of schedule.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Lead Designer at CreativeStudio",
      content:
        "Alex has an incredible ability to bridge the gap between design and development. His technical skills combined with design thinking make him a rare talent.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ],
};

// Helper to select DOM elements
const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

/*=========================== Navigation & Mobile Menu ===========================*/
const navToggle = $("#nav-toggle");
const navMenu = $("#nav-menu");
const themeToggle = $("#theme-toggle");

// Mobile menu toggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  
  // Animate hamburger bars
  const bars = $$(".bar", navToggle);
  if (navMenu.classList.contains("active")) {
    bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
  } else {
    bars[0].style.transform = "none";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "none";
  }
});

// Close mobile menu when clicking nav links
$$(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    // Reset hamburger animation
    const bars = $$(".bar", navToggle);
    bars[0].style.transform = "none";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "none";
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
    // Reset hamburger animation
    const bars = $$(".bar", navToggle);
    bars[0].style.transform = "none";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "none";
  }
});

/* Smooth scrolling */
$$("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/*=========================== Theme Toggle ===========================*/
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-color-scheme") === "dark";
  document.documentElement.setAttribute("data-color-scheme", isDark ? "light" : "dark");
  themeToggle.innerHTML = isDark ? "<i class='fas fa-moon'></i>" : "<i class='fas fa-sun'></i>";
});

/*=========================== Typing Effect ===========================*/
const typingText = $(".typing-text");
const cursor = $(".cursor");
let roleIndex = 0;
let charIndex = 0;
let typingDelay = 120;
let erasingDelay = 60;
let newRoleDelay = 1500;

function type() {
  if (charIndex < data.personalInfo.roles[roleIndex].length) {
    typingText.textContent += data.personalInfo.roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newRoleDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = data.personalInfo.roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    roleIndex = (roleIndex + 1) % data.personalInfo.roles.length;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(type, newRoleDelay));

/*=========================== Stats Counter ===========================*/
const statNumbers = $$(".stat-number");
const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute("data-target");
        let count = 0;
        const inc = target / 200;
        const updateCount = () => {
          count += inc;
          if (count < target) {
            el.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = target;
          }
        };
        updateCount();
        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);
statNumbers.forEach((num) => statsObserver.observe(num));

/*=========================== Skills Bars ===========================*/
function createSkillBars(containerId, skillsArray) {
  const container = $(`#${containerId}`);
  skillsArray.forEach((skill) => {
    const bar = document.createElement("div");
    bar.className = "skill-bar";
    bar.innerHTML = `
      <div class="skill-bar-label">${skill.name}</div>
      <div class="progress-bar"><div class="progress" style="width: ${skill.level}%"></div></div>
    `;
    container.appendChild(bar);
  });
}
createSkillBars("technical-skills", data.skills.technical);
createSkillBars("design-skills", data.skills.design);
createSkillBars("tools-skills", data.skills.tools);

/*=========================== Projects Rendering & Filter ===========================*/
const projectsGrid = $("#projects-grid");
function renderProjects(filter) {
  projectsGrid.innerHTML = "";
  data.projects
    .filter((proj) => (filter === "all" ? true : proj.category === filter))
    .forEach((project) => {
      const card = document.createElement("div");
      card.className = "card-item";
      card.setAttribute("data-id", project.id);
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy" />
        <div class="card-content">
          <h4>${project.title}</h4>
          <p>${project.description.substring(0, 80)}...</p>
          <div class="card-tags">${project.technologies
            .map((t) => `<span class='tag'>${t}</span>`) .join(" ")}</div>
        </div>
      `;
      card.addEventListener("click", () => openModal("project", project));
      projectsGrid.appendChild(card);
    });
}
renderProjects("all");

$$(".project-filters .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".project-filters .filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.getAttribute("data-filter"));
  });
});

/*=========================== Certificates Rendering & Filter ===========================*/
const certificatesGrid = $("#certificates-grid");
function renderCertificates(filter) {
  certificatesGrid.innerHTML = "";
  data.certificates
    .filter((c) => (filter === "all" ? true : c.category === filter))
    .forEach((cert) => {
      const card = document.createElement("div");
      card.className = "card-item";
      card.innerHTML = `
        <img src="${cert.image}" alt="${cert.title}" class="card-image" loading="lazy" />
        <div class="card-content">
          <h4>${cert.title}</h4>
          <p class="text-sm">Issued by ${cert.issuer}</p>
          <div class="tag" style="margin-top:8px;">${cert.category}</div>
        </div>
      `;
      card.addEventListener("click", () => openModal("certificate", cert));
      certificatesGrid.appendChild(card);
    });
}
renderCertificates("all");

$$(".certificate-filters .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".certificate-filters .filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCertificates(btn.getAttribute("data-filter"));
  });
});

/*=========================== Documents Rendering & Filter ===========================*/
const documentsGrid = $("#documents-grid");
function renderDocuments(filter) {
  documentsGrid.innerHTML = "";
  data.documents
    .filter((d) => (filter === "all" ? true : d.type === filter))
    .forEach((doc) => {
      const card = document.createElement("div");
      card.className = "card-item";
      card.innerHTML = `
        <div class="card-content" style="display:flex;align-items:center;gap:16px;">
          <div class="doc-icon">${doc.icon}</div>
          <div>
            <h4>${doc.title}</h4>
            <p class="text-sm">${doc.type} • ${doc.date}</p>
          </div>
        </div>
      `;
      card.addEventListener("click", () => openModal("document", doc));
      documentsGrid.appendChild(card);
    });
}
renderDocuments("all");

$$(".document-filters .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".document-filters .filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderDocuments(btn.getAttribute("data-filter"));
  });
});

/*=========================== Modal ===========================*/
const modal = $("#modal");
const modalBody = $("#modal-body");
const modalClose = $("#modal-close");
function openModal(type, item) {
  modalBody.innerHTML = "";
  if (type === "project") {
    modalBody.innerHTML = `
      <h2 id='modal-title'>${item.title}</h2>
      <img src='${item.image}' alt='${item.title}' style='width:100%;height:240px;object-fit:cover;border-radius:8px;margin:16px 0;' />
      <p>${item.description}</p>
      <p><strong>Technologies:</strong> ${item.technologies.join(", ")}</p>
      <a href='${item.demoLink}' target='_blank' class='btn btn--primary btn--sm' style='margin-right:8px;'>Live Demo</a>
      <a href='${item.codeLink}' target='_blank' class='btn btn--outline btn--sm'>Source Code</a>
    `;
  } else if (type === "certificate") {
    modalBody.innerHTML = `
      <h2 id='modal-title'>${item.title}</h2>
      <img src='${item.image}' alt='${item.title}' style='width:100%;height:240px;object-fit:cover;border-radius:8px;margin:16px 0;' />
      <p><strong>Issuer:</strong> ${item.issuer}</p>
      <p><strong>Date:</strong> ${item.date}</p>
      <p><strong>Credential ID:</strong> ${item.credentialId}</p>
      <p>${item.description}</p>
      <a href='${item.verificationLink}' target='_blank' class='btn btn--primary btn--sm'>Verify</a>
    `;
  } else if (type === "document") {
    modalBody.innerHTML = `
      <h2 id='modal-title'>${item.title}</h2>
      <p><strong>Type:</strong> ${item.type}</p>
      <p><strong>Date:</strong> ${item.date}</p>
      <p><strong>Issuer:</strong> ${item.issuer}</p>
      <p><strong>Status:</strong> ${item.status}</p>
      <p>${item.description}</p>
    `;
  }
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Restore background scrolling
}

/*=========================== Testimonials Slider ===========================*/
const testimonialTrack = $("#testimonial-track");
let slideIndex = 0;
function renderTestimonials() {
  testimonialTrack.innerHTML = "";
  data.testimonials.forEach((t) => {
    const slide = document.createElement("div");
    slide.className = "testimonial-card";
    slide.innerHTML = `
      <div class="testimonial-header">
        <img src="${t.image}" alt="${t.name}" class="testimonial-avatar"/>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
      <p>${t.content}</p>
    `;
    testimonialTrack.appendChild(slide);
  });
}
renderTestimonials();

function moveSlider(dir) {
  const slides = $$(".testimonial-card", testimonialTrack);
  const total = slides.length;
  if (dir === "next") slideIndex = (slideIndex + 1) % total;
  else slideIndex = (slideIndex - 1 + total) % total;
  testimonialTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
}
$("#next-btn").addEventListener("click", () => moveSlider("next"));
$("#prev-btn").addEventListener("click", () => moveSlider("prev"));

// Auto-play testimonials
setInterval(() => moveSlider("next"), 5000);

/*=========================== Lazy Loading Images ===========================*/
if ("loading" in HTMLImageElement.prototype) {
  $$("img[loading='lazy']").forEach((img) => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback: intersection observer
  const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        observer.unobserve(img);
      }
    });
  });
  $$("img[loading='lazy']").forEach((img) => lazyObserver.observe(img));
}

/*=========================== Form Validation ===========================*/
$("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  if (form.checkValidity()) {
    alert("Thank you for reaching out! I will get back to you soon.");
    form.reset();
  } else {
    // Show validation errors
    const invalidInputs = $$(".form-control:invalid", form);
    invalidInputs.forEach(input => {
      input.style.borderColor = "var(--color-error)";
    });
  }
});

// Remove error styling on input
$$(".form-control").forEach(input => {
  input.addEventListener("input", () => {
    input.style.borderColor = "";
  });
});

/*=========================== Scroll Animations ===========================*/
const animateOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

// Add scroll animation to sections
$$("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  animateOnScroll.observe(section);
});