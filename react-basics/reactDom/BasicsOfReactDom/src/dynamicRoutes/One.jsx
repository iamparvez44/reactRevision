import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usersArray = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    company: "TechNova Solutions",
    role: "Frontend Developer",
    city: "Delhi",
    age: 27,
    phone: "+91 9876543210",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    note: "Working on a new e-commerce project.",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@gmail.com",
    company: "CodeCraft Pvt Ltd",
    role: "Backend Developer",
    city: "Mumbai",
    age: 29,
    phone: "+91 9876543211",
    skills: ["Node.js", "Express", "MongoDB"],
    note: "Experienced in building REST APIs.",
  },
  {
    id: 3,
    name: "Aman Khan",
    email: "aman.khan@gmail.com",
    company: "DevHub Technologies",
    role: "Full Stack Developer",
    city: "Bangalore",
    age: 26,
    phone: "+91 9876543212",
    skills: ["React", "Node.js", "MongoDB"],
    note: "Currently working on a MERN stack application.",
  },
  {
    id: 4,
    name: "Neha Singh",
    email: "neha.singh@gmail.com",
    company: "PixelSoft",
    role: "UI/UX Designer",
    city: "Pune",
    age: 25,
    phone: "+91 9876543213",
    skills: ["Figma", "UI Design", "Prototyping"],
    note: "Specializes in creating modern user interfaces.",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    email: "arjun.mehta@gmail.com",
    company: "CloudMatrix",
    role: "Software Engineer",
    city: "Hyderabad",
    age: 30,
    phone: "+91 9876543214",
    skills: ["Java", "Spring Boot", "MySQL"],
    note: "Working on scalable backend systems.",
  },
  {
    id: 6,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@gmail.com",
    company: "WebWorks India",
    role: "React Developer",
    city: "Noida",
    age: 24,
    phone: "+91 9876543215",
    skills: ["React", "Redux", "JavaScript"],
    note: "Focused on building reusable React components.",
  },
  {
    id: 7,
    name: "Vikas Yadav",
    email: "vikas.yadav@gmail.com",
    company: "AppSphere",
    role: "Mobile Developer",
    city: "Gurgaon",
    age: 28,
    phone: "+91 9876543216",
    skills: ["React Native", "JavaScript", "Firebase"],
    note: "Developing cross-platform mobile applications.",
  },
  {
    id: 8,
    name: "Anjali Gupta",
    email: "anjali.gupta@gmail.com",
    company: "DataTech",
    role: "Data Analyst",
    city: "Chennai",
    age: 27,
    phone: "+91 9876543217",
    skills: ["Python", "SQL", "Power BI"],
    note: "Works on business analytics and reporting.",
  },
];

const One = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Component Mounted", id);

    const founUser = usersArray.find((x) => x.id == id);

    if (founUser) {
      setUser(founUser);
    }
    console.log(founUser);
  }, [id]);

  return (
    <div>
      <h1>I am One component</h1>

      {user && (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <h2>{user.company}</h2>
          <p>{user.role}</p>
          <p>{user.city}</p>
          <p>{user.age}</p>
          <p>{user.phone}</p>
          <p>{user.skills}</p>
          <p>{user.note}</p>
        </div>
      )}
    </div>
  );
};

export default One;
