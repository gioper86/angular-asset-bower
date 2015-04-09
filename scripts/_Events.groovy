eventTestPhaseStart = { phase ->
	if (phase == "unit") {
		def marshallerClass = Class.forName("grails.plugin.jodatime.simpledatastore.SimpleMapJodaTimeMarshaller")
		marshallerClass.initialize()
	}
}