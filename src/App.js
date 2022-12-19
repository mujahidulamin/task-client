import './App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {



  const [signUpError, setSignUpError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [tasks, setTask] = useState([])

  fetch('http://localhost:5000/task')
    .then(res => res.json())
    .then(data => setTask(data))


  const handleSignUp = data => {
    console.log(data);
    setSignUpError('');

    const task = {
      name: data.name,
      sectors: data.sectors,
      terms: data.terms
    }

    fetch('http://localhost:5000/task', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('Save Successfully to Database')
      })


  }












  return (

    <div className="App mt-8 hero" >
      <ToastContainer></ToastContainer>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='w-96 p-5 border '>
          <h2 className='text-xl font-semibold text-center'>Please enter your name and pick the Sectors you are currently involved in.</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered w-full " />
              {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
            </div>
            <div className='mt-5 grid gap-2'>
              <p>Select Sectors</p>
              <select className=' p-3 w-80 m-auto bg-slate-300 rounded' {...register("sectors", { required: "Sectors are required" })}>
                {errors.sectors && <p className='text-red-500' sectors="alert">{errors.sectors?.message}</p>}
                <option value="Manufacturing">Manufacturing</option>
                <option value="Construction materials">&nbsp;&nbsp;&nbsp;&nbsp;Construction materials</option>
                <option value="Electronics and Optics">&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics</option>
                <option value="Food and Beverage">&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage</option>
                <option value="Bakery & confectionery products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; confectionery products</option>
                <option value="Beverages">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
                <option value="Fish & fish products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products </option>
                <option value="Meat & meat products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products</option>
                <option value="Milk & dairy products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products </option>
                <option value="Other">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
                <option value="Sweets & snack food">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food</option>
                <option value="Furniture">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
                <option value="Bathroom/sauna">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna </option>
                <option value="Bedroom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
                <option value="Children’s room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children’s room </option>
                <option value="Kitchen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen </option>
                <option value="Living room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room </option>
                <option value="Office">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
                <option value="Other (Furniture)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)</option>
                <option value="Outdoor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor </option>
                <option value="Project furniture">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture</option>
                <option value="Machinery">&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
                <option value="Machinery components">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery components</option>
                <option value="Machinery equipment/tools">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools</option>
                <option value="Manufacture of machinery">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery </option>
                <option value="Maritime">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime</option>
                <option value="Aluminium and steel workboats">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats </option>
                <option value="Boat/Yacht building">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building</option>
                <option value="Ship repair and conversion">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion</option>
                <option value="Metal structures">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures</option>
                <option value="Other">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
                <option value="Repair and maintenance service">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service</option>
                <option value="Metalworking">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
                <option value="Construction of metal structures">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures</option>
                <option value="Houses and buildings">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings</option>
                <option value="Metal products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products</option>
                <option value="Metal works">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works</option>
                <option value="CNC-machining">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining</option>
                <option value="Forgings, Fasteners ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners </option>
                <option value="Gas, Plasma, Laser cutting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting</option>
                <option value="MIG, TIG, Aluminum welding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding</option>
                <option value="Plastic and Rubber">&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber</option>
                <option value="Packaging">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging</option>
                <option value="Plastic goods">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods</option>
                <option value="Plastic processing technology">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology</option>
                <option value="Blowing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing</option>
                <option value="Moulding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding</option>
                <option value="Plastics welding and processing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing</option>
                <option value="Plastic profiles">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles</option>
                <option value="Printing">&nbsp;&nbsp;&nbsp;&nbsp;Printing </option>
                <option value="Advertising">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising</option>
                <option value="Book/Periodicals printing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing</option>
                <option value="Labelling and packaging printing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing</option>
                <option value="Textile and Clothing">&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing</option>
                <option value="Clothing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing</option>
                <option value="Textile">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile</option>
                <option value="Wood">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
                <option value="Other (Wood)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)</option>
                <option value="Wooden building materials">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials</option>
                <option value="Wooden houses">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses</option>
                <option value="Other">Other</option>
                <option value="Creative industries">&nbsp;&nbsp;&nbsp;&nbsp;Creative industries</option>
                <option value="Energy technology">&nbsp;&nbsp;&nbsp;&nbsp;Energy technology</option>
                <option value="Environment">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
                <option value="Service">Service</option>
                <option value="Business services">&nbsp;&nbsp;&nbsp;&nbsp;Business services</option>
                <option value="Engineering">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
                <option value="Information Technology and Telecommunications">&nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications</option>
                <option value="Data processing, Web portals, E-marketing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals, E-marketing</option>
                <option value="Programming, Consultancy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy</option>
                <option value="Software, Hardware">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware</option>
                <option value="Telecommunications">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications</option>
                <option value="Tourism">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
                <option value="Translation services">&nbsp;&nbsp;&nbsp;&nbsp;Translation services</option>
                <option value="Transport and Logistics">&nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics</option>
                <option value="Air">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air</option>
                <option value="Rail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail</option>
                <option value="Road">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road</option>
                <option value="Water">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water</option>
              </select>
              {
                signUpError && <p className='text-red-500'>{signUpError}</p>
              }
            </div>
            <input className='btn btn-primary w-full my-5' value='Save' type="submit" />
            {
              signUpError && <p className='text-red-500'>{signUpError}</p>
            }

            <input
              {...register("terms", { required: "Terms is required" })}
              className='btn btn-primary w-full my-5' value='terms' type="checkbox" /> Agree to terms
            {
              signUpError && <p className='text-red-500'>{signUpError}</p>
            }
            {errors.terms && <p className='text-red-500' terms="alert">{errors.terms?.message}</p>}


          </form>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">

            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Sectors</th>
              </tr>
            </thead>
            <tbody>

              {
                tasks.map((task, i) =>
                  <tr>
                    <th>{i + 1}</th>
                    <td>{task.name}</td>
                    <td>{task.sectors}</td>
                  </tr>)
              }

            </tbody>
          </table>
        </div>



      </div>
    </div>
  );
}

export default App;
