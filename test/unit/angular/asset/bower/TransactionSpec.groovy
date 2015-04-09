package angular.asset.bower

import grails.test.mixin.*

import org.joda.time.DateTime

import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(Transaction)
class TransactionSpec extends Specification {

    void "test something"() {
		given:
			DateTime d1 = new DateTime(2014,1,1,0,0,0) 
			Transaction t1 = new Transaction(date: d1, value: 43.5).save()
		when:
			def results = Transaction.findAllByDate(d1)
		then:
			results.size() == 1
    }
}
