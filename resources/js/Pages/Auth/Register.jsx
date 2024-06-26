import {Head, Link, useForm} from "@inertiajs/react";
import Label from "@/Pages/Component/Label.jsx";
import Input from "@/Pages/Component/Input.jsx";

function Register({logo}) {
    const {data, setData, post, processing, errors} = useForm({
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
        first_name: '',
        last_name: '',
        address: '',
        phone_number: '',
        height: '',
        weight: '',
        gender: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/register')
    }

    return (
        <>
            <div className={'w-full min-h-screen md:px-10 bg-[#020617] sm:flex sm:flex-col items-center justify-center'}>
                <Head title={'Register'}/>
                <div className={'xl:w-1/2 px-10 py-5 rounded-lg border-dashed border-2 border-[#84CC16] bg-[#020617]'}>
                <div className={'justify-center flex my-4'}>
                    <img src={logo} alt=""/>
                </div>
                    <h1 className={'text-2xl font-bold my-2 text-white'}>Registrasi Akun</h1>

                    <form onSubmit={submit} className={'mt-4'}>
                        <div className={'md:flex md:mb-4'}>
                            <div className={'md:w-1/2 md:pe-2 '}>
                                <Label value={'Nama Awal'} htmlFor={'first_name'}/>
                                <Input type={'text'} name={'first_name'} id={'first_name'} value={data.first_name}
                                       onChange={(e) => setData('first_name', e.target.value)}/>
                                {errors.first_name &&
                                    <div className={'text-red-700 text-sm '}>{errors.first_name}</div>}
                            </div>
                            <div className={'md:w-1/2 md:ps-2'}>
                                <Label value={'Nama Akhir'} htmlFor={'last_name'}/>
                                <Input type={'text'} name={'last_name'} id={'last_name'} value={data.last_name}
                                       onChange={(e) => setData('last_name', e.target.value)}/>
                                {errors.last_name && <div className={'text-red-700 text-sm '}>{errors.last_name}</div>}
                            </div>
                        </div>
                        <div className={'md:flex md:mb-4'}>
                            <div className={'md:pe-2 md:w-1/2'}>
                                <Label value={'Username'} htmlFor={'name'}/>
                                <Input type={'text'} name={'name'} id={'name'} value={data.name}
                                       onChange={(e) => setData('name', e.target.value)}/>
                                {errors.name && <div className={'text-red-700 text-sm '}>{errors.name}</div>}
                            </div>
                            <div className={'md:ps-2 md:w-1/2'}>
                                <Label value={'Email'} htmlFor={'email'}/>
                                <Input type={'email'} name={'email'} id={'email'} value={data.email}
                                       onChange={(e) => setData('email', e.target.value)}/>
                                {errors.email && <div className={'text-red-700 text-sm '}>{errors.email}</div>}
                            </div>
                        </div>
                        <div className={'md:flex mb-4'}>
                            <div className={'md:w-1/2 md:pe-2'}>
                                <Label value={'Password'} htmlFor={'password'}/>
                                <Input type={'password'} name={'password'} id={'password'} value={data.password}
                                       onChange={(e) => setData('password', e.target.value)}/>
                                {errors.password && <div className={'text-red-700 text-sm'}>{errors.password}</div>}
                            </div>
                            <div className={'md:w-1/2 md:ps-2'}>
                                <Label value={'Konfirmasi Password'} htmlFor={'password_confirmation'}/>
                                <Input type={'password'} name={'password_confirmation'} id={'password_confirmation'} value={data.password_confirmation}
                                       onChange={(e) => setData('password_confirmation', e.target.value)}/>
                                {errors.password_confirmation && <div className={'text-red-700 text-sm'}>{errors.password_confirmation}</div>}
                            </div>
                        </div>
                        <div>
                            <div className={'mb-3'}>
                                <h1 className={'text-2xl font-bold text-white'}>Informasi Pribadi</h1>
                            </div>
                                <div className={'md:w-full md:mb-4'}>
                                    <Label value={'Alamat'} htmlFor={'address'}/>
                                    <Input type={'text'} name={'address'} id={'address'} value={data.address}
                                           onChange={(e) => setData('address', e.target.value)}/>
                                    {errors.address && <div className={'text-red-700 text-sm '}>{errors.address}</div>}
                                </div>
                            <div className={'md:flex md:mb-4'}>
                                <div className={'md:w-1/2 md:pe-2'}>
                                    <Label value={'Nomor Telepon'} htmlFor={'phone_number'}/>
                                    <Input type={'number'} name={'phone_number'} id={'phone_number'}
                                           value={data.phone_number}
                                           onChange={(e) => setData('phone_number', e.target.value)}/>
                                    {errors.phone_number &&
                                        <div className={'text-red-700 text-sm '}>{errors.phone_number}</div>}
                                </div>
                                <div className={'md:ps-2 md:w-1/2'}>
                                    <Label value={'Tanggal Lahir'} htmlFor={'date'}/>
                                    <Input type={'date'} name={'date'} id={'date'} value={data.date}
                                           onChange={(e) => setData('date', e.target.value)}/>
                                    {errors.date && <div className={'text-red-700 text-sm'}>{errors.date}</div>}
                                </div>
                            </div>
                        </div>
                        <div className={'md:flex md:mb-4'}>
                            <div className={'md:pe-2 md:w-1/3'}>
                                <Label value={'Tinggi Badan'} htmlFor={'height'}/>
                                <div
                                    className={'mt-1 flex  items-center w-full border border-white rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm'}>
                                    <input className={'bg-[#020617] border-r-4 border-none rounded-md focus:ring-lime-500 focus:border-lime-500 sm:text-sm text-white'}
                                           type={'number'} name={'height'} id={'height'} value={data.height}
                                           onChange={(e) => setData('height', e.target.value)}/>

                                    <h6 className={'ms-1 border-l-2 text-center w-full text-slate-100'}>Cm</h6>

                                </div>
                                {errors.height && <div className={'text-red-700 text-sm '}>{errors.height}</div>}
                            </div>
                            <div className={'md:pe-2 md:w-1/3'}>
                                <Label value={'Berat Badan'} htmlFor={'weight'}/>
                                <div
                                    className={'mt-1 flex items-center w-full border border-white rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm'}>

                                    <input className={'bg-[#020617] border-r-4 border-none rounded-md focus:ring-lime-500 focus:border-lime-500 sm:text-sm text-white'}
                                           type={'number'} name={'weight'} id={'weight'} value={data.weight}
                                           onChange={(e) => setData('weight', e.target.value)}/>

                                    <h6 className={'ms-1 border-l-2 text-center text-slate-100 w-full'}>Kg</h6>
                                </div>
                                {errors.weight && <div className={'text-red-700 text-sm '}>{errors.weight}</div>}
                            </div>
                            <div className={'md:w-1/3 mb-4'}>
                                <Label value={'Jenis Kelamin'} htmlFor={'gender'}/>
                                <select className="mt-1 bg-[#020617] text-white p-2 border-slate-300 rounded-md w-full" name={'gender'}
                                        id={'gender'}
                                        value={data.gender} onChange={(e) => setData('gender', e.target.value)}>
                                    <option>Pilih Jenis Kelamin</option>
                                    <option value={'L'}>Laki-Laki</option>
                                    <option value={'P'}>Perempuan</option>
                                </select>
                                {errors.gender && <div className={'text-red-700 text-sm'}>{errors.gender}</div>}
                            </div>

                        </div>
                        <div className={'mb-6'}>
                            <button type="submit"
                                    className={'w-full duration-150 bg-[#84CC16] hover:bg-lime-700 text-white p-2 rounded-lg '}>Register
                            </button>
                        </div>
                    </form>
                </div>
                <div className="my-8 justify-center flex">
                    <p className={'text-gray-300'}>Sudah punya akun? <Link href={route('login')}
                                                                         className={'text-[#84CC16] hover:text-lime-700'}>Login</Link>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Register;
