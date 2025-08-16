export default function Projects() {
  return (
    <section id="projects" className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Node.js Projects</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h3 className="text-xl font-bold">Gym Management Backend API</h3>
          <p>Built a backend API for gym membership and invoice management.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">E-Commerce Backend API</h3>
          <p>RESTful API with JWT auth, product/cart management, and Stripe payments. 
          Used MongoDB & Redis for caching.</p>
        </div>
      </div>
    </section>
  );
}
