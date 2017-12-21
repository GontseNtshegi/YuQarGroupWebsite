package com.yuqar.group.website.repository.search;

import com.yuqar.group.website.domain.Contact;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Contact entity.
 */
public interface ContactSearchRepository extends ElasticsearchRepository<Contact, Long> {
}
