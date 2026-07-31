const main=document.querySelector('main');const fleetSection=document.querySelector('#fleet');const servicesSection=document.querySelector('#capabilities');if(main&&fleetSection&&servicesSection)main.insertBefore(fleetSection,servicesSection);
const panels=[...document.querySelectorAll('.site-header nav a')];
const sectionForLink=link=>document.querySelector(link.getAttribute('href'));
const panelObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting) panels.forEach(link=>link.classList.toggle('active',sectionForLink(link)===entry.target));
}),{rootMargin:'-40% 0px -54%'});
panels.forEach(link=>{const section=sectionForLink(link);if(section)panelObserver.observe(section)});
