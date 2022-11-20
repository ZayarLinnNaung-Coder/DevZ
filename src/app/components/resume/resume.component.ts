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
        '2016-Current',
        'Technological University - Hmawbi',
        'Currently studying specialized in IT with strong passionate'
      ),
      new LifePasses(
        '2020-2021',
        'Y-Max University',
        'Achieved Diploma in Ethical Hacking and Cyber Security from NCFE based in UK'
      ),
      new LifePasses(
        '2021-2021',
        'MMS One Stop IT Solutions',
        'Successfully completed Basic Web Design (BWD) and Special Web Design (SWD)'
      )
    ]

    this.experience = [
      new LifePasses(
        '2016-Current',
        'Online',
        'I study continuously by making projects or sometimes from tutorials and documentations.'
      ),
      new LifePasses(
        '2020 May-2020 July',
        'Technological University (Hmawbi)',
        'Leading for creating encrypt/decrypt algorithm named DES without any frameworks or library for 6th BE thesis.'
      ),
      new LifePasses(
        '2022-Current',
        'ACEPlus Software Company',
        'Joined as a Java Developer for insurance systems'
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
      'JavaScript', 'CSS', 'HTML','Bootstrap', 'jQuery', 'tailwind', 'Material', 'Angular',
      'Java', 'Spring', 'Spring Boot', 'JWT', 'JavaEE'
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
