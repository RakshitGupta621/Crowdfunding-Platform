import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/index';
import {ethers} from 'ethers' //libaray used to have some interaction with smart contract
import { IsImage } from '../tools'
// import {FormData} from '../components/index'
import { CustomButton,FormData } from '../components'


const CreateCampaign = () => {
  const navigate = useNavigate()
  const [isloading, setIsloading] = useState(false)
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name:'',
    title:'',
    description:'',
    target:'',
    deadline:'',
    image:''
  });

  const handleFormDataValue=(formvariable, e)=>{
    setForm({...form,[formvariable]:e.target.value})
  }

  const handleSubmit = async(e) => {
      e.preventDefault(); // prevent loading of page, in react
      // need to create this, but first need web3 context inside application
      console.log(form)

      IsImage(form.image, async(exists) => {
        e.preventDefault();
        IsImage(form.image, async(exists) => {
          if(exists) {
            setIsloading(true);
            await createCampaign({...form, target: ethers.utils.parseUnits(form.target, 18)})
            setIsloading(false);
            navigate('/');
          } else {
            console.log('CANNOT GET THE DATA')
            alert('Provide valid image URL:')
            setform({...form, image:''});
          }
        })
      })
  }
  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
        {isloading && 'Loader...'}
        <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
          <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Start a Campaign</h1>
        </div>
        <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
          <div className='flex flex-wrap gap-[40px]'>
              <FormData
                name="Your Name *"
                placeholder="Rakshit"
                inputType="text"
                value={form.name}
                handleChange={(e)=>handleFormDataValue('name',e)}
              />
              <FormData
                name="Campaign Title"
                placeholder="write a title"
                inputType="text"
                value={form.title}
                handleChange={(e)=>handleFormDataValue('title',e)}
              />
          </div>

          <FormData
                name="Story *"
                placeholder="write your story"
                isTextArea
                value={form.description}
                handleChange={(e)=>handleFormDataValue('description',e)}
              />

          <div  className="w-full flex justify-start items-center p-4 bg-[#FFFFFF] h-[120px] rounded-[10px]">
            {/* <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/> */}
            <div className="font-epilogue font-bold text-[25px] text-black ml-[20px]">No Fees on Raised amount is applied</div>
          </div>
          <div className='flex flex-wrap gap-[40px]'>
              <FormData
                name="Goal *"
                placeholder="ETH .1"
                inputType="text"
                value={form.target}
                handleChange={(e)=>handleFormDataValue('target',e)}
              />
              <FormData
                name="End Date *"
                placeholder="Last Date"
                inputType="date"
                value={form.deadline}
                handleChange={(e)=>handleFormDataValue('deadline',e)}
              />
            </div>
          <FormData
                name="Campaign Image *"
                placeholder="url of images for your campaign"
                inputType="url"
                value={form.image}
                handleChange={(e)=>handleFormDataValue('image',e)}
              />  
          <div className='flex justify-center items-center mt-[40px]'>
                <CustomButton 
                  btnType="submit"
                  title="Create new Campaign"
                  styles="bg-[#1dc071]"
                />
          </div>      
        </form>
    </div>
  )
}

export default CreateCampaign