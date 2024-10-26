const speakers = [
    { 
      name: 'John Doe', 
      position: 'Chief Marketing Officer', 
      company: 'Acme Corp', 
      bio: 'Monotonectally synergize business communities rather than client-centric convergence.Assertively unleash cross-platforms rather than pandemic total linkage.Synergistically monetize parllel informediaries whereas 2.0 mindshare.Dramatically pursue real-time markets through e-business strategic theme areas.',
      imgSrc: 'https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      name: 'Nancy', 
      position: 'Chief Engagement Officer', 
      company: 'Acquia', 
      bio: 'The Information Technology (IT) field is vast, constantly evolving, and filled with opportunities for both beginners and seasoned professionals. One of the most prominent topics in IT today is Artificial Intelligence (AI) and Machine Learning (ML).',
      imgSrc: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      name: 'Jack', 
      position: 'Chief Technical Developer', 
      company: 'Specbee', 
      bio: 'Another critical focus in IT is Cybersecurity. As the digital world expands, so do the risks associated with cyberattacks, hacking, and data breaches. Protecting sensitive data has become a top priority for organizations of all sizes.',
      imgSrc: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      name: 'Lucy', 
      position: 'Chief Marketing Officer', 
      company: 'Specbee', 
      bio: 'Cloud Computing has also become a cornerstone of modern IT infrastructure. Cloud platforms such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud are enabling businesses to scale their operations, reduce costs, and improve accessibility.',
      imgSrc: 'https://images.pexels.com/photos/28964419/pexels-photo-28964419/free-photo-of-elegant-woman-in-black-and-white-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      name: 'Oliver', 
      position: 'Chief Operations Officer', 
      company: 'TechCorp', 
      bio: 'The rise of DevOps and Automation has transformed the way IT teams work. DevOps emphasizes collaboration between development and operations teams, fostering faster and more reliable software delivery.',
      imgSrc: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    }
  ];

  const slider = document.getElementById('slider');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const detailsSection = document.getElementById('detailsSection');
  const closeBtn = document.getElementById('closeBtn');
  let currentPosition = 0;


  const detailsImg = document.getElementById('detailsImg');
  const detailsName = document.getElementById('detailsName');
  const detailsPosition = document.getElementById('detailsPosition');
  const detailsCompany = document.getElementById('detailsCompany');
  const detailsBio = document.getElementById('detailsBio');


  function generateCards() {
    slider.innerHTML = '';
    speakers.forEach((speaker, index) => {
      const card = document.createElement('div');
      card.className = 'card text-center shadow-sm';
      card.innerHTML = `
        <img src="${speaker.imgSrc}" class="card-img-top rounded-circle mt-4 mx-auto" alt="${speaker.name}" style="width: 100px; height: 100px;">
        <div class="card-body">
          <h5 class="card-title">${speaker.name}</h5>
          <p class="card-text">${speaker.position}</p>
          <p class="text-muted">${speaker.company}</p>
        </div>
      `;
      card.addEventListener('click', () => showDetails(index)); 
      slider.appendChild(card);
    });
    updateButtons(); 
  }


  generateCards();

  function showDetails(index) {
    const speaker = speakers[index];
    detailsImg.src = speaker.imgSrc;
    detailsName.textContent = speaker.name;
    detailsPosition.textContent = speaker.position;
    detailsCompany.textContent = speaker.company;
    detailsBio.textContent = speaker.bio;
    detailsSection.style.display = 'block';
  }

  closeBtn.addEventListener('click', () => {
    detailsSection.style.display = 'none';
  });

  function updateButtons() {
    if (currentPosition === 0) {
      prevButton.style.display = 'none';
    } else {
      prevButton.style.display = 'inline-block';
    }

    if (currentPosition === -(speakers.length - 4)) { 
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'inline-block';
    }
  }

  nextButton.addEventListener('click', () => {
    if (currentPosition > -(speakers.length - 4)) { 
      currentPosition--;
      slider.style.transform = `translateX(${currentPosition * 17}rem)`;
      updateButtons();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentPosition < 0) {
      currentPosition++;
      slider.style.transform = `translateX(${currentPosition * 17}rem)`;
      updateButtons();
    }
  });