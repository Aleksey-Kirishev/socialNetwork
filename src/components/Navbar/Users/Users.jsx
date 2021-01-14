import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, users, ...props}) => {
    return <div>
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                   onPageChanged={onPageChanged} currentPage={currentPage}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow} unfollow={props.unfollow}
                                     key={u.id}
                    />
                )}
        </div>

    </div>
}


export default Users;