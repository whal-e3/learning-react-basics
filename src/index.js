import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<CommentDetail
					author='Sam'
					timeAgo='Today at 4:45PM'
					content='Nice blog post!'
					avatar={faker.image.image()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Alex'
					timeAgo='Today at 2:00AM'
					content='Long time no see!'
					avatar={faker.image.image()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Jane'
					timeAgo='Yesterday at 5:00PM'
					content='Beautiful~!'
					avatar={faker.image.image()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
