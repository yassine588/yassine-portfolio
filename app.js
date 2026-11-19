// Bilingual EN / FR Dictionary (No dates on CV/Portfolio items per user rule)
const I18N = {
  en: {
    nav_projects: "Projects",
    nav_blog: "Engineering Blog",
    nav_skills: "Architecture & Skills",
    nav_credentials: "Experience & Certifications",
    nav_contact: "Contact",
    theme_btn: "Theme",
    hero_badge: "Available for AI, Automation & Enterprise Integration Roles",
    hero_role: "AI & Automation Engineer | Full Stack & Enterprise Integration Developer",
    hero_summary:
      "Hands-on engineer specializing in designing, implementing, and operating automated event-driven workflows (n8n), enterprise API integrations, AI/LLM document pipelines (RAG, OCR, embeddings), and reliable full-stack systems. Strong focus on secure REST/webhook contracts (HMAC-SHA256, OIDC/JWT, RBAC), idempotency, and production observability.",
    btn_cv_en: "Download CV (EN)",
    btn_cv_fr: "Télécharger CV (FR)",
    btn_read_blog: "Read Engineering Blog →",
    hero_location: "Tunis, Tunisia",
    pipe_1: "Constant-time signature verification, 300s timestamp replay window, and strict JSON payload schema validation.",
    pipe_2: "Vision OCR extraction, semantic embeddings lookup, structured JSON contract enforcement, and exponential backoff retries.",
    pipe_3: "Deduplicated callback write-backs to Convex / Oracle DB / Spring Boot with structured audit logging and incident routing.",
    proj_eyebrow: "Production Systems & Integrations",
    proj_title: "Featured AI, Automation & Enterprise Projects",
    proj_subtitle:
      "Architectures built for reliability: event-driven workflow automation, vision-LLM document extraction, strict RBAC security, and real-time telemetry.",
    filter_all: "All Systems (5)",
    filter_auto: "n8n & Workflow Automation",
    filter_ai: "AI, LLM & Computer Vision",
    filter_ent: "Enterprise RBAC & Full Stack",
    p1_cat: "Workflow Orchestration & Webhook Security",
    p1_sub: "Automated Workflow & Secure Webhook Integration Platform",
    p1_b1: "Architected an event-driven platform integrating a reactive Convex backend with containerized n8n workflows for real-time request notifications, scheduled daily overdue reminders, and automated incident handling.",
    p1_b2: "Engineered bidirectional HMAC-SHA256 webhook signing with 300-second replay protection, exponential backoff retries, idempotent callback write-backs, and real-time automation health timelines.",
    p1_b3: "Enforced server-side Role-Based Access Control (RBAC), strict API data-minimization contracts, and automated Vitest suites auditing security, RBAC, and workflow JSON definitions.",
    p1_case_btn: "Read Security Case Study",
    p2_cat: "AI Document Processing & RAG Pipeline",
    p2_sub: "Automated AI Document & Invoice Processing Pipeline",
    p2_b1: "Designed an end-to-end automated ingestion and OCR extraction workflow in n8n using Claude AI vision models and RAG/embedding pipelines to transform unstructured invoices into validated JSON contracts.",
    p2_b2: "Integrated Spring Boot REST APIs and Oracle DB persistence with automated schema validation, error-recovery routing, Docker Compose containerization, and zero-trust exposure via Cloudflare Tunnel.",
    p2_arch_label: "Enterprise AI Pipeline",
    p2_case_btn: "Read AI Pipeline Study",
    p3_cat: "Enterprise Operations & Database Engineering",
    p3_sub: "Enterprise Operations, Audit & RBAC Platforms",
    p3_b1: "Built offline-first enterprise applications managing security personnel, duty schedules, and contracts with granular RBAC, structured audit timestamps, and automated backup/recovery routines.",
    p3_b2: "Diagnosed and resolved SQL N+1 query bottlenecks and UI thread-blocking issues; engineered resilient EF Core migrations targeting Oracle XE (RAW(16) GUID mapping) and local SQLite stores.",
    p3_arch_label: "Hybrid Oracle XE / SQLite",
    p3_case_btn: "Read DB & RBAC Study",
    p4_cat: "Multilingual SaaS & Document Workflows",
    p4_sub: "Multilingual Linguistic & Document Workflow Platform",
    p4_b1: "Architected a high-performance quadrilingual platform (Arabic, French, English, Hebrew) with automated client-side PDF document generation pipelines and bidirectional RTL/LTR layout engines.",
    p4_b2: "Implemented dynamic i18n routing, automated linguistic processing workflows, and Core Web Vitals optimization for fast interactive document rendering.",
    p4_live_link: "Live Production Site (corriger-et-traduire.com) ↗",
    p5_cat: "Deep Learning, Computer Vision & IoT Telemetry",
    p5_sub: "Real-Time Wearable Telemetry & MobileNetV2 Vision Classifiers",
    p5_b1: "Engineered Node.js REST APIs for real-time wearable health telemetry ingestion (heart rate, SpO2, blood pressure, GPS) with automated anomaly detection and emergency alert routing.",
    p5_b2: "Trained and deployed Python/TensorFlow CNN classifiers (MobileNetV2 transfer learning & OpenCV) for real-time video inference in Shop Win and Smart Trash classification systems.",
    blog_eyebrow: "Engineering Blog & Technical Case Studies",
    blog_title: "Deep Dives in Automation, AI Pipelines & System Reliability",
    blog_subtitle:
      "Architectural notes and production post-mortems on securing webhook integrations, orchestrating Vision-LLM extraction pipelines, and eliminating database bottlenecks.",
    b1_title: "Securing Bidirectional n8n Webhooks with HMAC-SHA256, Replay Protection, and Idempotent Callbacks",
    b1_excerpt:
      "How to prevent spoofed automation triggers, replay attacks, and duplicate state mutations when connecting reactive backends (Next.js / Convex) to containerized n8n workflows.",
    b2_title: "Building Production AI Document Extraction Pipelines with n8n, Vision LLMs, and RAG",
    b2_excerpt:
      "Transforming unstructured multi-layout invoices into deterministic JSON data contracts using Claude Vision, vector embeddings for vendor disambiguation, and Spring Boot + Oracle DB validation.",
    b3_title: "Eliminating SQL N+1 Bottlenecks & Enforcing Server-Side RBAC in Enterprise Systems",
    b3_excerpt:
      "Lessons learned from profiling Entity Framework Core queries across Oracle XE and SQLite, mapping RAW(16) GUIDs cleanly, and enforcing zero-trust Role-Based Access Control with audit trails.",
    read_full_article: "Read Full Technical Article →",
    skills_eyebrow: "Core Competencies",
    skills_title: "Architecture & Technical Stack",
    skills_subtitle:
      "End-to-end engineering across workflow orchestration, generative AI integration, backend APIs, relational/reactive databases, and DevOps observability.",
    sk_cat_1: "⚡ Automation & API Integration",
    sk_cat_2: "🧠 AI & Data Engineering",
    sk_cat_3: "⚙️ Backend & Languages",
    sk_cat_4: "💻 Frontend & Desktop UI",
    sk_cat_5: "🗄️ Databases & Persistence",
    sk_cat_6: "🛡️ Security, Observability & DevOps",
    cred_eyebrow: "Background & Credentials",
    cred_title: "Professional Experience, Certifications & Education",
    exp_heading: "Professional Experience",
    loc_tunis: "Tunis, Tunisia",
    exp1_role: "Full Stack & Web Developer",
    exp1_desc:
      "Designed, developed, and deployed full-stack web solutions, custom PHP/WordPress integrations, and automated client workflows while optimizing application performance and technical SEO.",
    exp2_role: "Software Development Intern",
    exp2_desc:
      "Contributed to end-to-end software delivery, internal workflow automation tools, REST API integration, and diagnostic debugging.",
    exp3_role: "Systems & Electronics Technician Intern",
    exp3_desc:
      "Performed hardware diagnostics, signal troubleshooting, and preventive maintenance on commercial electronic and audio-visual systems.",
    cert_heading: "Certifications & Education",
    cert1_desc:
      "Deep Neural Networks (DNNs), Computer Vision (CNNs), Sequence Modeling & NLP, Transfer Learning, and model optimization on GPU-accelerated NVIDIA infrastructure.",
    cert2_desc:
      "Intensive full-stack software engineering certification focused on REST API design, data modeling, authentication, and scalable web architecture (MongoDB, Express, React, Node.js).",
    edu_degree: "Bachelor's Degree in Computer Engineering (IoT & Embedded Systems)",
    edu_desc:
      "Computer Engineering curriculum covering distributed systems, network protocols, IoT telemetry, embedded microcontrollers, software engineering, and relational databases.",
    contact_eyebrow: "Direct Contact & Links",
    contact_title: "Let's Build Resilient AI & Automation Systems",
    contact_subtitle:
      "Reach out directly via email or phone, explore my source repositories on GitHub, or download my English and French resumes."
  },
  fr: {
    nav_projects: "Projets",
    nav_blog: "Blog Technique",
    nav_skills: "Architecture & Compétences",
    nav_credentials: "Expérience & Certifications",
    nav_contact: "Contact",
    theme_btn: "Thème",
    hero_badge: "Disponible — Ingénieur IA, Automatisation & Intégration d'Entreprise",
    hero_role: "Ingénieur IA & Automatisation | Développeur Full Stack & Intégration d'Entreprise",
    hero_summary:
      "Ingénieur spécialisé dans la conception, l'intégration et l'exploitation de workflows événementiels automatisés (n8n), d'APIs d'entreprise, de pipelines documentaires IA/LLM (RAG, OCR, embeddings) et d'applications full-stack résilientes. Forte expertise en sécurisation des échanges (webhooks HMAC-SHA256, OIDC/JWT, RBAC), idempotence et observabilité en production.",
    btn_cv_en: "Télécharger CV (EN)",
    btn_cv_fr: "Télécharger CV (FR)",
    btn_read_blog: "Lire le Blog Technique →",
    hero_location: "Tunis, Tunisie",
    pipe_1: "Vérification de signature en temps constant, fenêtre anti-rejeu de 300s et validation stricte des schémas JSON.",
    pipe_2: "Extraction OCR par Vision LLM, recherche vectorielle RAG, validation des contrats JSON et retries avec backoff exponentiel.",
    pipe_3: "Callbacks idempotents dédupliqués vers Convex / Oracle DB / Spring Boot avec journaux d'audit et routage d'incidents.",
    proj_eyebrow: "Systèmes en Production & Intégrations",
    proj_title: "Projets Clés — IA, Automatisation & Systèmes d'Entreprise",
    proj_subtitle:
      "Architectures conçues pour la fiabilité : orchestration de workflows événementiels, extraction documentaire par Vision-LLM, sécurité RBAC et télémétrie temps réel.",
    filter_all: "Tous les Systèmes (5)",
    filter_auto: "n8n & Automatisation de Workflows",
    filter_ai: "IA, LLM & Vision par Ordinateur",
    filter_ent: "RBAC Entreprise & Full Stack",
    p1_cat: "Orchestration de Workflows & Sécurité Webhooks",
    p1_sub: "Plateforme d'Automatisation de Workflows & Webhooks Sécurisés",
    p1_b1: "Conception d'une architecture événementielle couplant un backend réactif Convex à des workflows n8n conteneurisés pour les notifications temps réel, les relances planifiées (cron) et la gestion automatisée des incidents.",
    p1_b2: "Implémentation de signatures de webhooks bidirectionnelles HMAC-SHA256 (fenêtre anti-rejeu de 300s), retries avec backoff exponentiel, callbacks idempotents et journalisation de santé des automatisations.",
    p1_b3: "Contrôle d'accès serveur (RBAC), minimisation stricte des données exposées par API et suite de tests automatisés (Vitest) validant la sécurité, l'idempotence et les définitions JSON des workflows.",
    p1_case_btn: "Lire l'Étude de Cas Sécurité",
    p2_cat: "Traitement Documentaire IA & Pipeline RAG",
    p2_sub: "Pipeline Automatisé d'Extraction Documentaire & Factures par IA",
    p2_b1: "Conception d'un pipeline n8n de bout en bout pour l'ingestion et l'extraction OCR de factures via Claude AI Vision et des flux RAG/embeddings, convertissant des documents non structurés en contrats JSON validés.",
    p2_b2: "Intégration avec des APIs REST Spring Boot et une base Oracle DB, validation arithmétique automatisée, gestion des reprises sur erreur, Docker Compose et exposition sécurisée via Cloudflare Tunnel.",
    p2_arch_label: "Pipeline IA d'Entreprise",
    p2_case_btn: "Lire l'Étude Pipeline IA",
    p3_cat: "Exploitation d'Entreprise & Ingénierie Base de Données",
    p3_sub: "Plateformes d'Exploitation, d'Audit & RBAC",
    p3_b1: "Développement d'applications métier offline-first pour la gestion d'opérations, plannings et contrats avec RBAC granulaire, journaux d'audit horodatés et procédures automatisées de sauvegarde/restauration.",
    p3_b2: "Diagnostic et résolution de goulots d'étranglement SQL (requêtes N+1) et blocages UI ; migrations EF Core résilientes vers Oracle XE (mappage GUID RAW(16)) et SQLite.",
    p3_arch_label: "Hybride Oracle XE / SQLite",
    p3_case_btn: "Lire l'Étude DB & RBAC",
    p4_cat: "SaaS Multilingue & Workflows Documentaires",
    p4_sub: "Plateforme Linguistique Multilingue & Génération Documentaire",
    p4_b1: "Architecture d'une plateforme web quadrilingue (Arabe, Français, Anglais, Hébreu) intégrant des pipelines de génération PDF côté client et un moteur de mise en page bidirectionnel RTL/LTR.",
    p4_b2: "Routage i18n dynamique, automatisation des flux de traitement linguistique et optimisation des Core Web Vitals.",
    p4_live_link: "Site en Production (corriger-et-traduire.com) ↗",
    p5_cat: "Deep Learning, Vision par Ordinateur & Télémétrie IoT",
    p5_sub: "Télémétrie Médicale Temps Réel & Classifieurs CNN MobileNetV2",
    p5_b1: "Développement d'APIs REST Node.js pour l'ingestion temps réel de télémétrie médicale (fréquence cardiaque, SpO2, tension, GPS) avec détection d'anomalies et routage d'alertes d'urgence.",
    p5_b2: "Entraînement et déploiement de modèles CNN sous Python/TensorFlow (transfer learning MobileNetV2 & OpenCV) pour l'inférence vidéo temps réel (Shop Win & Smart Trash).",
    blog_eyebrow: "Blog Technique & Études de Cas d'Ingénierie",
    blog_title: "Analyses Techniques : Automatisation, Pipelines IA & Fiabilité",
    blog_subtitle:
      "Notes d'architecture et retours d'expérience sur la sécurisation de webhooks n8n, l'orchestration de pipelines Vision-LLM/RAG et l'optimisation de bases de données d'entreprise.",
    b1_title: "Sécuriser des Webhooks n8n Bidirectionnels avec HMAC-SHA256, Protection Anti-Rejeu et Callbacks Idempotents",
    b1_excerpt:
      "Comment prévenir l'usurpation de déclencheurs, les attaques par rejeu et les mutations dupliquées lors de l'intégration d'un backend réactif (Next.js / Convex) avec des workflows n8n.",
    b2_title: "Concevoir des Pipelines d'Extraction Documentaire IA en Production avec n8n, Vision LLMs et RAG",
    b2_excerpt:
      "Transformer des factures multi-formats non structurées en contrats JSON déterministes grâce à Claude Vision, aux embeddings vectoriels (RAG) et à une validation Spring Boot + Oracle DB.",
    b3_title: "Éliminer les Goulots d'Étranglement SQL N+1 & Appliquer un RBAC Serveur dans les Systèmes d'Entreprise",
    b3_excerpt:
      "Retours d'expérience sur le profilage de requêtes Entity Framework Core (Oracle XE & SQLite), le mappage GUID RAW(16) et l'auditabilité des contrôles d'accès basés sur les rôles.",
    read_full_article: "Lire l'Article Technique Complet →",
    skills_eyebrow: "Compétences Clés",
    skills_title: "Architecture & Stack Technique",
    skills_subtitle:
      "Ingénierie de bout en bout : orchestration de workflows, intégration d'IA générative, APIs backend, bases de données relationnelles/réactives et observabilité DevOps.",
    sk_cat_1: "⚡ Automatisation & Intégration d'APIs",
    sk_cat_2: "🧠 Ingénierie IA & Data",
    sk_cat_3: "⚙️ Backend & Langages",
    sk_cat_4: "💻 Frontend & Interfaces Desktop",
    sk_cat_5: "🗄️ Bases de Données & Persistance",
    sk_cat_6: "🛡️ Sécurité, Observabilité & DevOps",
    cred_eyebrow: "Parcours & Qualifications",
    cred_title: "Expérience Professionnelle, Certifications & Formation",
    exp_heading: "Expérience Professionnelle",
    loc_tunis: "Tunis, Tunisie",
    exp1_role: "Développeur Full Stack & Web",
    exp1_desc:
      "Conception, développement et déploiement de solutions web full-stack, intégrations PHP/WordPress sur-mesure et automatisation de flux clients avec optimisation des performances et du SEO.",
    exp2_role: "Stagiaire Développeur Logiciel",
    exp2_desc:
      "Participation au cycle de livraison logicielle de bout en bout, prototypage d'outils d'automatisation internes, intégration d'APIs REST et diagnostic technique.",
    exp3_role: "Stagiaire Technicien Systèmes & Électronique",
    exp3_desc:
      "Diagnostic matériel, analyse de signaux, tests de fiabilité et maintenance préventive de systèmes électroniques et audiovisuels.",
    cert_heading: "Certifications & Formation",
    cert1_desc:
      "Réseaux de neurones profonds (DNN), Computer Vision (CNN), modélisation séquentielle & NLP, apprentissage par transfert et optimisation sur infrastructure GPU NVIDIA.",
    cert2_desc:
      "Certification intensive en ingénierie logicielle full-stack : conception d'APIs REST, modélisation de données, authentification et architecture MERN (MongoDB, Express, React, Node.js).",
    edu_degree: "Licence en Génie Informatique (Spécialité IoT & Systèmes Embarqués)",
    edu_desc:
      "Formation en ingénierie informatique couvrant les systèmes distribués, protocoles réseaux, télémétrie IoT, systèmes embarqués, génie logiciel et bases de données relationnelles.",
    contact_eyebrow: "Contact Direct & Liens",
    contact_title: "Construisons des Systèmes IA & d'Automatisation Résilients",
    contact_subtitle:
      "Contactez-moi directement par e-mail ou téléphone, explorez mes dépôts GitHub ou téléchargez mon CV en version anglaise ou française."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Toggle (EN / FR)
  let currentLang = localStorage.getItem("yk_lang") || "en";
  const langToggleBtn = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem("yk_lang", lang);
    const dict = I18N[lang] || I18N.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    if (langLabel) {
      langLabel.textContent = lang === "en" ? "FR 🇫🇷" : "EN 🇬🇧";
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "fr" : "en");
    });
  }
  applyLanguage(currentLang);

  // 2. Color Scheme Override Toggle (System default via color-scheme + manual override)
  const themeToggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("yk_theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  // Listen to OS prefers-color-scheme changes per modern-web-guidance
  const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkMediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("yk_theme")) {
      document.documentElement.removeAttribute("data-theme");
    }
  });

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentAttr = document.documentElement.getAttribute("data-theme");
      const isCurrentlyDark =
        currentAttr === "dark" || (!currentAttr && darkMediaQuery.matches);
      const nextTheme = isCurrentlyDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("yk_theme", nextTheme);
    });
  }

  // 3. Project Category Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll("#projectsGrid .card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const categories = (card.getAttribute("data-category") || "").split(" ");
        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 4. Native <dialog> Modal Opening & MANDATORY Light-Dismiss Fallback for browsers without closedBy
  document.querySelectorAll("[data-open-dialog]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetId = trigger.getAttribute("data-open-dialog");
      const dialog = document.getElementById(targetId);
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });

  // Fallback for browsers without native <dialog closedby="any"> support (e.g. Safari)
  if (typeof HTMLDialogElement !== "undefined" && !("closedBy" in HTMLDialogElement.prototype)) {
    document.querySelectorAll('dialog[closedby="any"]').forEach((dialog) => {
      dialog.addEventListener("click", (event) => {
        // 1. When clicking the backdrop, the event target is the dialog element itself.
        if (event.target !== dialog) return;

        // 2. Check if the click coordinates fall within the dialog's content box.
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (isDialogContent) return;

        // 3. Click was on the backdrop outside content bounds -> close dialog
        dialog.close();
      });
    });
  }
});
