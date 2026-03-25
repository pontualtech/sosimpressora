/* ============================================
   SOS Impressora — main.js
   FAQ accordion, mobile nav, scroll effects,
   contact form, lazy images
   ============================================ */

(function () {
  'use strict';

  /* ---- Helpers ---- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ============================================
     MOBILE NAV
     ============================================ */
  function initMobileNav() {
    const hamburger = $('#nav-hamburger');
    const mobileMenu = $('#nav-mobile');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('open', !expanded);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
      }
    });

    // Close on nav link click
    $$('a', mobileMenu).forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ============================================
     STICKY HEADER SCROLL EFFECT
     ============================================ */
  function initHeaderScroll() {
    const header = $('.site-header');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================
     ACTIVE NAV LINK
     ============================================ */
  function initActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    $$('.nav-links a, .nav-mobile a').forEach(link => {
      const href = link.getAttribute('href');
      if (
        href === currentPath ||
        (currentPath === '' && href === 'index.html') ||
        (currentPath === 'index.html' && href === 'index.html')
      ) {
        link.classList.add('active');
      }
    });
  }

  /* ============================================
     FAQ ACCORDION
     ============================================ */
  function initFAQ() {
    const items = $$('.faq-item');
    if (!items.length) return;

    items.forEach(item => {
      const trigger = $('.faq-trigger', item);
      const panel = $('.faq-panel', item);
      if (!trigger || !panel) return;

      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        // Close all others
        items.forEach(other => {
          if (other !== item) {
            const otherTrigger = $('.faq-trigger', other);
            const otherPanel = $('.faq-panel', other);
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            if (otherPanel) otherPanel.style.maxHeight = '0';
            other.classList.remove('open');
          }
        });

        // Toggle current
        trigger.setAttribute('aria-expanded', String(!isOpen));
        item.classList.toggle('open', !isOpen);

        if (!isOpen) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
          panel.style.maxHeight = '0';
        }
      });
    });

    // Open first item by default
    const firstTrigger = $('.faq-trigger', items[0]);
    const firstPanel = $('.faq-panel', items[0]);
    if (firstTrigger && firstPanel) {
      firstTrigger.setAttribute('aria-expanded', 'true');
      items[0].classList.add('open');
      firstPanel.style.maxHeight = firstPanel.scrollHeight + 'px';
    }
  }

  /* ============================================
     CONTACT FORM
     ============================================ */
  function initContactForm() {
    const form = $('#contact-form');
    if (!form) return;

    // Check if redirected back after successful Formsubmit submission
    if (window.location.search.includes('enviado=1')) {
      const successMsg = $('#form-success');
      if (successMsg) {
        successMsg.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em até 30 minutos.';
        successMsg.classList.add('visible');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    // Validate required fields before allowing natural form submission to Formsubmit.co
    form.addEventListener('submit', function (e) {
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.classList.add('input-error');
        } else {
          field.classList.remove('input-error');
        }
      });

      if (!valid) {
        e.preventDefault();
        const firstError = form.querySelector('.input-error');
        if (firstError) firstError.focus();
        return;
      }

      const submitBtn = $('[type="submit"]', form);
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }
      // Allow form to submit naturally to Formsubmit.co
    });
  }

  /* ============================================
     PHONE MASK
     ============================================ */
  function initPhoneMask() {
    const phoneInputs = $$('input[type="tel"], input[name="telefone"]');
    phoneInputs.forEach(input => {
      input.addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '').slice(0, 11);
        if (v.length > 10) {
          v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        } else if (v.length > 6) {
          v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
        } else if (v.length > 2) {
          v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
        } else if (v.length > 0) {
          v = v.replace(/^(\d{0,2})$/, '($1');
        }
        this.value = v;
      });
    });
  }

  /* ============================================
     SCROLL ANIMATIONS (Intersection Observer)
     ============================================ */
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const animatables = $$('[data-animate]');
    if (!animatables.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    animatables.forEach(el => observer.observe(el));
  }

  /* ============================================
     SMOOTH SCROLL for anchor links
     ============================================ */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.getElementById(this.getAttribute('href').slice(1));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ============================================
     LAZY LOAD IMAGES
     ============================================ */
  function initLazyLoad() {
    if ('loading' in HTMLImageElement.prototype) return; // native lazy load supported

    if (!('IntersectionObserver' in window)) return;

    const lazyImages = $$('img[loading="lazy"]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => observer.observe(img));
  }

  /* ============================================
     COUNTER ANIMATION for stats
     ============================================ */
  function initCounters() {
    const counters = $$('[data-count]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 1500;
        const start = performance.now();

        const update = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target).toLocaleString('pt-BR');
          if (progress < 1) requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  /* ============================================
     INIT ALL
     ============================================ */
  function init() {
    initMobileNav();
    initHeaderScroll();
    initActiveNav();
    initFAQ();
    initContactForm();
    initPhoneMask();
    initScrollAnimations();
    initSmoothScroll();
    initLazyLoad();
    initCounters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
