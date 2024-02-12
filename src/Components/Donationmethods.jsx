import Mastercard from "../assets/Paymethods/Mastercardsmall.svg"
import Visa from "../assets/Paymethods/Visasmall.svg"
import Stripe from "../assets/Paymethods/Stripesmall.svg"
import Cryptocurrency from "../assets/Paymethods/Bitcoinsmall.svg"
import { Button } from "flowbite-react"

export default function Donationmethods() {
  return (
    <div className='border  h-80 rounded-md p-5 lg:w-full md:w-full '>
      

      <fieldset>
        
        <label htmlFor="mastercard" className='p-3  h-12 '>
              <div className="flex  items-center gap-20">
                  <div className="flex items-center gap-3">
                  <img src={Mastercard} alt=""  />
                    <p className="text-lg font-manual">Mastercard</p>
                  </div>
                  <div>
                     <input type="radio" id="mastercard" value="1" name="Payment method" />
                  </div>
              </div>
        </label>
        <label htmlFor="visa" className='p-3  h-12 '>
              <div className="flex  items-center gap-[136px]">
                  <div className="flex items-center gap-3">
                  <img src={Visa} alt=""  />
                    <p className="text-lg font-manual">Visa</p>
                  </div>
                  <div>
                     <input type="radio" id="visa" value="2" name="Payment method" />
                  </div>
              </div>
        </label>
        <label htmlFor="Stripe" className='p-3  h-12 '>
              <div className="flex  items-center gap-[122px]">
                  <div className="flex items-center gap-3">
                  <img src={Stripe} alt=""  />
                    <p className="text-lg font-manual">Stripe</p>
                  </div>
                  <div>
                     <input type="radio" id="Stripe" value="3" name="Payment method" />
                  </div>
              </div>
        </label>
        <label htmlFor="Cryptocurrency" className='p-3  h-12 '>
              <div className="flex  items-center gap-[45px]">
                  <div className="flex items-center gap-3">
                  <img src={Cryptocurrency} alt=""  />
                    <p className="text-lg font-manual">Cryptocurrency</p>
                  </div>
                  <div>
                     <input type="radio" id="Cryptocurrency" value="4" name="Payment method" />
                  </div>
              </div>
        </label>
      <Button className="w-full">Connect Method</Button>
      </fieldset>
      </div>



  )
}
