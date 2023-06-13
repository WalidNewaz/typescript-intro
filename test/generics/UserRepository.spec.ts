import { expect } from 'chai';

import { IRepository } from '../../src/generics/IRepository';
import { User } from '../../src/generics/User';
import { UserRepository } from '../../src/generics/UserRepository';

describe('UserRepository', () => {

    let repository: IRepository<User> = new UserRepository();

    it('adds a user to the repository', () => {
        let user = new User('John', 'Doe');
        repository.save(user);
        expect(repository.get(user.id)).to.equal(user);
    });

    it('updates a user in the repository', () => {
        let users = repository.getAll();
        let user = users[0];
        user.firstName = 'Jane';
        repository.update(user);
        expect(repository.get(user.id)).to.equal(user);
    });

    it('deletes a user from the repository', () => {
        let users = repository.getAll();
        let user = users[0];
        repository.delete(user.id);
        expect(repository.get(user.id)).to.be.undefined;
    });
});