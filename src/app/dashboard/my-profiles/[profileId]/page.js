import Profile from '@/models/Profile';
import AddProfilePage from '@/templates/AddProfilePage';
import connectDB from '@/utils/connectDB'

async function Edit({params:{profileId}}) {
    await connectDB();
    const profile=await Profile.findOne({_id:profileId})
    return (
    <AddProfilePage data={JSON.parse(JSON.stringify(profile))}/>
  )
}

export default Edit
