
export default function Header() {
  return (
    <header className='flex justify-center w-full bg-gray-950 h-20 rounded-b-xl text-white'>
              <ul className="flex items-center ">
                <li className=" hover:bg-red-500 rounded-sm p-2">Contact</li>
                <li className=" hover:bg-green-500 rounded-sm p-2">Cartes</li>
                <li className=" hover:bg-yellow-400 rounded-sm p-2" >Composition équipe</li>
              </ul>
    </header>
  )
}
