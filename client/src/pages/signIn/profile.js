import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { isLength, isMatch } from './components/body/utils/Validation'
import { showSuccessMsg, showErrMsg } from './components/body/utils/Notification'
import { fetchAllUsers, dispatchGetAllUsers } from './redux-tobedeleted_combinewithProdectStore/actions/usersAction'
import './components/body/profile/profile.css'


const initialState = {
  name: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

const Profile = () => {
  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)

  const users = useSelector(state => state.users)

  const { user, isAdmin } = auth
  const [data, setData] = useState(initialState)
  const { name, password, cf_password, err, success } = data


  const [loading, setLoading] = useState(false)
  const [callback, setCallback] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isAdmin) {
      fetchAllUsers(token).then(res => {
        dispatch(dispatchGetAllUsers(res))
      })
    }
  }, [token, isAdmin, dispatch, callback])

  const handleChange = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value, err: '', success: '' })
  }


  const updateInfor = () => {
    try {
      axios.patch('/user/update', {
        name: name ? name : user.name,

      }, {
        headers: { Authorization: token }
      })

      setData({ ...data, err: '', success: "Updated Success!" })
    } catch (err) {
      setData({ ...data, err: err.response.data.msg, success: '' })
    }
  }

  const updatePassword = () => {
    if (isLength(password))
      return setData({ ...data, err: "Password must be at least 8 characters.", success: '' })

    if (!isMatch(password, cf_password))
      return setData({ ...data, err: "Password did not match.", success: '' })

    try {
      axios.post('/user/reset', { password }, {
        headers: { Authorization: token }
      })

      setData({ ...data, err: '', success: "Updated Success!" })
    } catch (err) {
      setData({ ...data, err: err.response.data.msg, success: '' })
    }
  }

  const handleUpdate = () => {
    if (name) updateInfor()
    if (password) updatePassword()
  }

  // const handleDelete = async (id) => {
  //   try {
  //     if (user._id !== id) {
  //       if (window.confirm("Are you sure you want to delete this account?")) {
  //         setLoading(true)
  //         await axios.delete(`/user/delete/${id}`, {
  //           headers: { Authorization: token }
  //         })
  //         setLoading(false)
  //         setCallback(!callback)
  //       }
  //     }

  //   } catch (err) {
  //     setData({ ...data, err: err.response.data.msg, success: '' })
  //   }
  // }

  return (
    <div className="page-container">
      <div className="content-wrap">
        <div>
          {err && showErrMsg(err)}
          {success && showSuccessMsg(success)}
          {loading && <h3>Loading.....</h3>}
        </div>

        <div className="profile_page">
          <div className="col-left">
            <h2>{isAdmin ? "Admin Profile" : "User Profile"}</h2>


            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" defaultValue={user.name}
                placeholder="Your name" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" defaultValue={user.email}
                placeholder="Your email address" disabled />
            </div>

            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input type="password" name="password" id="password"
                placeholder="Your password" value={password} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="cf_password">Confirm New Password</label>
              <input type="password" name="cf_password" id="cf_password"
                placeholder="Confirm password" value={cf_password} onChange={handleChange} />
            </div>

            <div>
              <em style={{ color: "crimson" }}>
                * If you update your password here, you will not be able
                to login quickly using google.
              </em>
            </div>

            <button disabled={loading} onClick={handleUpdate}>Update</button>

          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Profile;