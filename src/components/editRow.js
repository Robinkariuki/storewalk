import React from 'react'
import { Button } from 'react-bootstrap';


const EditRow = ({item,editFormData,handleEditFormChange,handleCancelClick}) => {
  return (
    <tr>
        <td>
            {item.Question}
        </td>
            <td>
                <input type="text"
                required="required"
                placeholder="enter status"
                name="State"
                onChange={handleEditFormChange}
                value={editFormData.State}
                ></input>
            </td>
             <td>
             <input type="text"
                required="required"
                placeholder="Next Step"
                name="Nextstep"
                onChange={handleEditFormChange}
                value={editFormData.Nextstep}
                ></input>
             </td>
             <td>
             <input type="text"
                required="required"
                placeholder="enter who"
                name="Who"
                onChange={handleEditFormChange}
                value={editFormData.Who}

                ></input>
             </td>
             <td>
             <input type="text"
                required="required"
                placeholder="enter when"
                name="WhenTime"
                onChange={handleEditFormChange}
                value={editFormData.WhenTime}
                ></input>

             </td>
             <td>
             <input type="text"
                required="required"
                placeholder="Done?"
                name="Done"
                onChange={handleEditFormChange}
                value={editFormData.Done}
                
                ></input>

             </td>
             <td>
             <Button type="submit" size="sm">Save</Button>
             <Button type="button" size="sm" onClick={handleCancelClick}>cancel</Button>
             </td>
    </tr>
  )
}

export default EditRow