import { Component, OnInit } from '@angular/core';
import {LifePasses} from "../../model/LifePasses";
import {Skill} from "../../model/Skill";
declare var TagCloud: any;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  education: LifePasses[] = [];
  experience: LifePasses[] = [];

  programmingLanguageSkills: Skill[] = [];
  designSkills: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
    this.education = [
      new LifePasses(
        '2016-2019',
        'Bachelor of Engineering (Information Technology)',
        'I had to freeze my engineering student life in my third year because of starting from Covid 19 and the current political situation in Myanmar.'
      ),
      new LifePasses(
        '2020-2021',
        'Y-Max University',
        'Achieved Diploma in Ethical Hacking and Cyber Security from NCFE based in UK'
      )
    ]

    this.experience = [
      new LifePasses(
        '2024 MAR - Current / WaveMoney Myanmar',
        'Platform Engineer',
        'Design and build platform features and required APIs for one of the biggest fintech company in Myanmar.'
      ),
      new LifePasses(
        '2022 MAR - 2024 MAR / ACEPlus Software Company',
        'Senior Software Engineer',
        'Develop and maintain the enterprise insurance systems use in famous companies like Myanma Insurance, FNI, GGI, EFI and many others'
      ),
      new LifePasses(
        '2019 FEB - 2022 MAR / Root.Studio',
        'Junior Java Developer',
        'Responsible for the development and deployment of various web applications, including an e-commerce platform, blogging platform, and many others.'
      )
    ]

    this.programmingLanguageSkills = [
      new Skill('HTML', 80),
      new Skill('CSS', 78),
      new Skill('Javascript', 68),
      new Skill('Bootstrap', 75),
      new Skill('jQuery', 65),
      new Skill('Angular', 70),
      new Skill('Spring', 65),
      new Skill('Spring Boot', 70),
    ];

    this.designSkills = [
      new Skill('Adobe Illustrator', 80),
      new Skill('Adobe Photoshop', 75),
      new Skill('Figma', 70),
      new Skill('Adobe XD', 70),
    ]


    let aboutMeClassList = document.getElementById('aboutMe')!.classList;
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 250){
        aboutMeClassList.add('active');
      }else{
        aboutMeClassList.remove('active');
      }
    })

    const myTags = [
      'Angular', 'Java', 'Spring', 'Spring Boot', 'JWT', 'JavaEE', 'Redis', 'Kafka', 'Druid', 'Docker', 'Rabbit MQ', 'Spring Cloud', 'AWS', 'Active MQ', 'Elastic Search'
    ];

    let tagCloud = TagCloud('.animated-text', myTags,{

      // radius in px
      radius: 200,

      // animation speed
      // slow, normal, fast
      maxSpeed: 'fast',
      initSpeed: 'fast',

      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,

      // interact with cursor move on mouse out
      keep: true

    });
  }

  scrollDown(){
    window.scrollTo(0, window.innerHeight * 9 / 10);
  }

}
