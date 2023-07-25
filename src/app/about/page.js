
'use client';

import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';

import style from '../styles/aboutus.module.css'

export default function About() {
    return (
        <>

        <Header/>
        <div className={style.back}>
         
        <div className={style.fdiv} >
            <h2 className={style.fh2} >
            
            مَنْ نَحْنُ وَمَاذَا نَفْعَل 
            </h2>
            <p className="w-6/12 m-10 text-lg text-center dark:text-white  " style={{ marginLeft: "25%" }}>
            مُهِمَّةٌ هَذَا الْمَوْقِع في بناء ثقافة عامة لدى المستخدم من خلال مسابقات وألعاب ممتعة ومسلية وتحفيز المستخدم على زيادة معرفته ودقة ملاحظته            </p>
            
      <h5 class="m-3 text-2xl italic font-bold text-center text-black dark:text-white text-[#061735]">قَيِّم الْمَوْقِع </h5>
      <p class="w-6/12 m-10 text-lg text-center dark:text-white" style={{ marginLeft: "25%" }}>
      مَا يتركز عَلَيْه الْمَوْقِع هُوَ زيادة الوعي والثقافة العامة في علم الدين والثقافة العامة ةالتاكيد على اهمية المعرفة ف بعض الامور الاساسية التي يجب ان يعرفها كل فرد ينتمي الى هذا الدين الْحَنِيف   

         </p>
         
         <img  className={style.aboutusimage} src="/assets/cover.jpg" alt=""/>


          <div className={style.part2}>
        <h1 className="m-3 text-2xl italic font-bold text-center text-[#061735]">ثلاث تحديات  بالأرقام </h1>
        <div className={style.part1}>
          <div className={style.inner}>
          <h1  className="m-3 text-2xl italic font-bold text-center text-[#061735]">2023</h1>
          <p className={`${style.p1} dark:text-white`} >سَنَّةُ النَّشْأَة </p>
          </div>
          <div className={style.inner}>
          <h1  className="m-3 text-2xl italic font-bold text-center text-[#061735]">100+</h1>
          <p className={`${style.p1} dark:text-white`} >عَدَدِ الزيارات</p>
          </div>
          <div className={style.inner}>
          <h1  className="m-3 text-2xl italic font-bold text-center text-[#061735]">1000+</h1>
          <p className={`${style.p1} dark:text-white`} >عدد مرات اللعب</p>
          </div>
          <div className={style.inner}>
          <h1  className="m-3 text-2xl italic font-bold text-center text-[#061735]">7</h1>
          <p className={`${style.p1} dark:text-white`}  >أنواع الاسئلة</p>
          </div>
          <div className={style.inner}>
          <h1  className="m-3 text-2xl italic font-bold text-center text-[#061735]">100+  </h1>
          <p className={`${style.p1} dark:text-white`} >بنك الأسئلة</p>
          </div>
          <div className={style.inner}>
          <h1  className="m-3 text-2xl italic font-bold text-center text-[#061735]">3</h1>
          <p className={`${style.p1} dark:text-white`}  >عدد الالعاب</p>
          </div>
        </div>
        <p className={`${style.p1} dark:text-white`} >
        فِي نِهَايَةِ مَا نُرِيدُ هُوَ أَنْ نُخَلِّصَ عَمِلْنَا ابْتِغَاءَ وَجْهِ اللَّهِ وإعمار الْأَرْض وَالْحِرْصِ عَلَى خِدْمَةِ الْمُجْتَمَعِ الْمَحَلِّيّ وَجَمِيعِ الْمُسْلِمِينَ ، وَالِاسْتِمْرَارِ فِي تَقْدِيمِ مَا يُمَيِّزُ بِهِ دِينِنَا الْحَنِيف لِلْجَمِيع بِطُرُق مُمَيِّزَة وجديدة وحصرية وبالصورة الصَّحِيحَة
        </p>
         </div>
        </div>
        </div>
        <Footer/>
        </>
 
    )
}