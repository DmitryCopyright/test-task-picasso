import { useState } from 'react';
import type { SelectChangeEvent } from '@mui/material';

import { UserFilter } from '../components/UserFilter';
import { PostList } from '../components/PostList';

export const PostListPage = () => {
    const [selectedUserId, setSelectedUserId] = useState<string>('')

    const handleChangeSelectedUserId = (event: SelectChangeEvent) => {
        const userId = event.target.value
        setSelectedUserId(userId)
    };

    const handleResetFilter = () => {
        setSelectedUserId('')
    };

    return (
        <>
            <h1>List of posts</h1>
            <UserFilter
                value={selectedUserId}
                onChange={handleChangeSelectedUserId}
                onReset={handleResetFilter}

            />

            <PostList userId={selectedUserId} />

        </>
    );
}