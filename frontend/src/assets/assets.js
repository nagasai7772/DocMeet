// import appointment_img from './appointment_img.png'
import BannerDoc_img from './bannerimg.png'
import doctors_img from './Doctorsimg.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import Contact_img from './Contact_img.jpg'
import about_img from './about_img.avif'
import logo from './LogoHosp.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import Doctor1 from './Doctor1.jpg'
import Doctor2 from './Doctor2.jpg'
import Doctor3 from './Doctor3.jpg'
import Doctor4 from './Doctor4.jpg'
import Doctor5 from './Doctor5.jpg'
import Doctor6 from './Doctor6.jpg'
import Doctor7 from './Doctor7.jpg'
import Doctor8 from './Doctor8.avif'
import Doctor9 from './Doctor9.jpg'
import Doctor10 from './Doctor10.jpg'
import Doctor11 from './Doctor11.jpg'
import Doctor12 from './Doctor12.jpg'
import Doctor13 from './Doctor13.jpg'
import Doctor14 from './Doctor14.jpg'
import Doctor15 from './Doctor15.jpg'
import SignupImage from './Signupimage.jpg'
import formimg from './loginsteth.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    BannerDoc_img,
    doctors_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    Contact_img,
    about_img,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    SignupImage,
    formimg
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Ananya Sharma',
        image: Doctor1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ananya Sharma is a dedicated general physician with 4 years of experience, committed to delivering comprehensive medical care. She focuses on preventive medicine, early diagnosis, and effective treatment strategies to ensure optimal patient health. Her expertise lies in managing a wide range of acute and chronic conditions with a patient-centered approach.',
        fees: 450,
        address: {
            line1: '17th Cross, Banjara Hills',
            line2: 'Road No. 12, Hyderabad'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Riya Mehta',
        image: Doctor2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: "Dr. Riya Mehta is a skilled gynecologist with 3 years of experience, specializing in women's health, prenatal care, and reproductive wellness. She is committed to providing personalized and compassionate care, focusing on early diagnosis, preventive treatments, and effective management of gynecological conditions. Her patient-centric approach ensures comfort and trust in every stage of care.",
        fees: 560,
        address: {
            line1: '27th Cross, Jubilee Hills',
            line2: 'Road No. 36, Hyderabad'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Pranitha Reddy',
        image: Doctor3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: "Dr. Pranitha Reddy is a passionate dermatologist with 1 year of experience, specializing in skincare, hair health, and treating various dermatological conditions. She focuses on personalized treatments, early diagnosis, and preventive care to help patients achieve healthy, glowing skin. With a patient-friendly and compassionate approach, she ensures a comfortable and reassuring experience for all.",
        fees: 630,
        address: {
            line1: '37th Cross, Madhapur',
            line2: 'Hitech City Road, Hyderabad'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Aditya Sharma',
        image: Doctor4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Vikram Patel is a dedicated pediatrician with 2 years of experience, specializing in the healthcare of infants, children, and adolescents. He focuses on preventive care, early diagnosis, and effective treatment of childhood illnesses. With a warm and friendly approach, he ensures that both children and parents feel comfortable and well-informed during every visit',
        fees: 540,
        address: {
            line1: '47th Cross, Kukatpally',
            line2: 'Circle, Ring Road, Hyderabad'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Vikram Patel',
        image: Doctor5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Vikram Patel is dedicated to providing exceptional neurological care with a strong emphasis on early diagnosis, preventive strategies, and effective treatment plans. With four years of experience, he is committed to improving patient outcomes through personalized care and advanced medical approaches.',
        fees: 1150,
        address: {
            line1: '57th Cross, Ameerpet',
            line2: 'Greenlands Road, Hyderabad'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Anirudh Choudhury',
        image: Doctor6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Anirudh Choudhury is an experienced neurologist with 4 years of expertise in diagnosing and treating disorders of the brain, nerves, and spine. He specializes in managing conditions such as migraines, epilepsy, stroke, and neurodegenerative diseases. With a patient-focused approach, he emphasizes early diagnosis, advanced treatment strategies, and personalized care to improve neurological health and overall well-being.',
        fees: 1350,
        address: {
            line1: '57th Cross, KPHB Colony',
            line2: 'JNTU Road, Kukatpally, Hyderabad'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Rajesh Verma',
        image: Doctor7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rajesh Verma is a highly skilled general physician with 4 years of experience in diagnosing and managing a wide range of acute and chronic medical conditions. He specializes in preventive healthcare, comprehensive patient management, and evidence-based treatment strategies. With a strong commitment to patient well-being, he provides personalized care, ensuring effective recovery and long-term health.',
        fees: 1250,
        address: {
            line1: '17th Cross, KPHB Colony',
            line2: 'Circle, Ring Road, Hyderabad'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Megha Rao',
        image: Doctor8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: "Dr. Megha Rao is a skilled gynecologist with 3 years of experience, dedicated to women's health and well-being. She specializes in prenatal care, reproductive health, and the management of gynecological conditions. With a patient-focused and compassionate approach, she ensures personalized care, guiding women through every stage of their health journey.",
        fees: 1560,
        address: {
            line1: '27th Cross, Madhapur',
            line2: 'Image Gardens Road, Hyderabad'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Kavita Patel ',
        image: Doctor9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Kavita Patel is a passionate dermatologist with 1 year of experience, committed to providing expert care for skin, hair, and nail concerns. She believes in a holistic approach, combining medical expertise with personalized treatments to enhance skin health. With a warm and patient-friendly demeanor, she ensures a comfortable and positive experience for all her patients.',
        fees: 530,
        address: {
            line1: '37th Cross, Hafeezpet',
            line2: 'Circle, Miyapur Road, Hyderabad'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Neha Desai',
        image: Doctor10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: "Dr. Neha Desai is a dedicated pediatrician with 2 years of experience, passionate about nurturing children's health and development. She specializes in preventive care, immunizations, and the management of common childhood conditions. With a kind and patient approach, she strives to create a comforting environment for young patients and their families.",
        fees: 640,
        address: {
            line1: '47th Cross, Bhagya Nagar Colony',
            line2: 'Circle, Near JNTU, Hyderabad'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Arvind Kumar',
        image: Doctor11,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Arvind Kumar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1350,
        address: {
            line1: '57th Cross, Miyapur',
            line2: 'Circle, Hafeezpet Main Road, Hyderabad'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Manoj Joshi',
        image: Doctor12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Manoj Joshi is a skilled neurologist with 4 years of experience, specializing in the diagnosis and treatment of neurological disorders. He is dedicated to providing compassionate care for conditions such as migraines, epilepsy, stroke, and nerve-related issues. With a patient-centric approach, he focuses on early detection, effective treatment, and improving overall brain health.',
        fees: 1850,
        address: {
            line1: '57th Cross, Mindspace',
            line2: 'Circle, Hitech City Road, Hyderabad'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Sunita Reddy',
        image: Doctor13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sunita Reddy is a dedicated general physician with 4 years of experience, committed to providing quality healthcare with a focus on preventive medicine and patient well-being. She believes in a holistic approach to treatment, ensuring personalized care for every patient. Her friendly and understanding nature makes consultations comfortable and reassuring.',
        fees: 650,
        address: {
            line1: '17th Cross, Balanagar Road',
            line2: 'Near Balanagar Metro Station, Hyderabad'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Raghunath Rao',
        image: Doctor14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: "Dr. Raghunath Rao is a compassionate gynecologist with 3 years of experience, dedicated to women's health and well-being. He specializes in prenatal care, reproductive health, and the management of gynecological conditions. With a patient-friendly approach, he focuses on early diagnosis, preventive care, and personalized treatment to ensure the best outcomes for his patients.",
        fees: 960,
        address: {
            line1: '27th Cross, Moosapet',
            line2: 'Circle, Kukatpally Main Road, Hyderabad'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Deepa Joshi',
        image: Doctor15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Deepa Joshi is a passionate dermatologist with 1 year of experience, dedicated to helping patients achieve healthy skin. She specializes in treating common skin concerns like acne, eczema, and hair loss while focusing on early diagnosis and personalized care. With a friendly and patient-centric approach, she ensures comfort and confidence in every treatment.',
        fees: 930,
        address: {
            line1: '37th Cross, Balkampet Road',
            line2: 'Circle, Near SR Nagar Signal, Hyderabad'
        }
    },
]