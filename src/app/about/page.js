
'use client';

import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';

import style from '../styles/aboutus.module.css'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <>

        <Header/>

<div class="flex flex-wrap justify-center mt-[120px]">

  <div class="max-w-sm mx-4 my-8 bg-white shadow-md rounded-lg overflow-hidden">
    <div class="bg-[#93BFCF] h-32 w-32 mx-auto rounded-full mt-4 flex items-center justify-center">
     
      <img src="./assets/quran.png" alt="Card Image" class="rounded-full w-24 h-24"/>
 
    </div>
    <div class="text-center px-6 py-4">
      <h2 class="text-xl font-bold text-gray-800 mb-2">رسالتنا</h2>
      <p class="text-gray-600 text-base">في نِهَايَةِ مَا نُرِيدُ هُوَ أَنْ نُخَلِّصَ عَمِلْنَا ابْتِغَاءَ وَجْهِ اللَّهِ وإعمار الْأَرْض وَالْحِرْصِ عَلَى خِدْمَةِ الْمُجْتَمَعِ الْمَحَلِّيّ وَجَمِيعِ الْمُسْلِمِينَ ، وَالِاسْتِمْرَارِ فِي تَقْدِيمِ مَا يُمَيِّزُ بِهِ دِينِنَا الْحَنِيف لِلْجَمِيع بِطُرُق مُمَيِّزَة وجديدة وحصرية وبالصورة الصَّحِيحَة</p>
    </div>
  </div>
  <div class="max-w-sm mx-4 my-8 bg-white shadow-md rounded-lg overflow-hidden">
    <div class="bg-[#93BFCF] h-32 w-32 mx-auto rounded-full mt-4 flex items-center justify-center">
     
      <img src="./assets/quran.png" alt="Card Image" class="rounded-full w-24 h-24"/>
 
    </div>
    <div class="text-center px-6 py-4">
      <h2 class="text-xl font-bold text-gray-800 mb-2">قَيِّم الْمَوْقِع</h2>
      <p class="text-gray-600 text-base">ما يتركز عَلَيْه الْمَوْقِع هُوَ زيادة الوعي والثقافة العامة في علم الدين والثقافة العامة ةالتاكيد على اهمية المعرفة ف بعض الامور الاساسية التي يجب ان يعرفها كل فرد ينتمي الى هذا الدين الْحَنِيف  </p>
    </div>
  </div>
  <div class="max-w-sm mx-4 my-8 bg-white shadow-md rounded-lg overflow-hidden">
    <div class="bg-[#93BFCF] h-32 w-32 mx-auto rounded-full mt-4 flex items-center justify-center">
     
      <img src="./assets/quran.png" alt="Card Image" class="rounded-full w-24 h-24"/>
 
    </div>
    <div class="text-center px-6 py-4">
      <h2 class="text-xl font-bold text-gray-800 mb-2">مَنْ نَحْنُ وَمَاذَا نَفْعَل</h2>
      <p class="text-gray-600 text-base">مهِمَّةٌ هَذَا الْمَوْقِع في بناء ثقافة عامة لدى المستخدم من خلال مسابقات وألعاب ممتعة ومسلية وتحفيز المستخدم على زيادة معرفته ودقة ملاحظته </p>
    </div>
  </div>
  </div>
        
        {/* <main className={styles.Heromain}>
        <div className={style.fdiv} >
            <h2 className={style.fh2} >
            
            مَنْ نَحْنُ وَمَاذَا نَفْعَل 
            </h2>
            <p className="w-6/12 m-10 text-lg text-center dark:text-white  " style={{ marginLeft: "25%" }}>

            مُهِمَّةٌ هَذَا الْمَوْقِع في بناء ثقافة عامة لدى المستخدم من خلال مسابقات وألعاب ممتعة ومسلية وتحفيز المستخدم على زيادة معرفته ودقة ملاحظته            
            
            </p>
            
      <h5 class="m-3 text-2xl italic font-bold text-center text-black dark:text-white text-[#061735]">قَيِّم الْمَوْقِع </h5>
      <p class="w-6/12 m-10 text-lg text-center dark:text-white" style={{ marginLeft: "25%" }}>

      مَا يتركز عَلَيْه الْمَوْقِع هُوَ زيادة الوعي والثقافة العامة في علم الدين والثقافة العامة ةالتاكيد على اهمية المعرفة ف بعض الامور الاساسية التي يجب ان يعرفها كل فرد ينتمي الى هذا الدين الْحَنِيف   

         </p>
         
         <img  className={style.aboutusimage} src="/assets/cover.jpg" alt=""/>


          <div className={style.part2}>
      
       
        <p className={`${style.p1} dark:text-white`} >
        فِي نِهَايَةِ مَا نُرِيدُ هُوَ أَنْ نُخَلِّصَ عَمِلْنَا ابْتِغَاءَ وَجْهِ اللَّهِ وإعمار الْأَرْض وَالْحِرْصِ عَلَى خِدْمَةِ الْمُجْتَمَعِ الْمَحَلِّيّ وَجَمِيعِ الْمُسْلِمِينَ ، وَالِاسْتِمْرَارِ فِي تَقْدِيمِ مَا يُمَيِّزُ بِهِ دِينِنَا الْحَنِيف لِلْجَمِيع بِطُرُق مُمَيِّزَة وجديدة وحصرية وبالصورة الصَّحِيحَة
        </p>
         </div>
        </div>
       </main> */}
      
        <Footer/>
        </>
 
    )
}