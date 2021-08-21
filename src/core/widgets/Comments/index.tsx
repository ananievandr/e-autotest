import { useState } from 'react';
import CommentsBlock from 'simple-react-comments';

import { CommentEntity } from './interfaces';

function CommentComponent() {
	const [comments, setComments] = useState<CommentEntity[]>([]);
	return (
		<div>
		<CommentsBlock
			comments={comments}
			isLoggedIn
			onSubmit={text => {
				if (text.length > 0) {
					setComments([
							...comments,
							{
								authorUrl: '#',
								avatarUrl: '#avatarUrl',
								createdAt: new Date(),
								fullName: 'Name',
								text,
							},
						],);
				}
			}}
		/>
	</div>
	);
}

export {CommentComponent};