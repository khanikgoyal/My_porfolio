export default function Skills() {
  return (
    <section id="skills" className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div><h3 className="font-bold">Backend</h3><p>Node.js, Express.js, REST APIs, Microservices</p></div>
        <div><h3 className="font-bold">Databases</h3><p>MongoDB, SQL, Redis</p></div>
        <div><h3 className="font-bold">Tools</h3><p>Git, GitHub, Postman</p></div>
        <div><h3 className="font-bold">ServiceNow</h3><p>JavaScript, Glide API, Automation</p></div>
      </div>
    </section>
  );
}
