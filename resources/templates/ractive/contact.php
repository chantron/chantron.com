<script id="contact-template" type="text/html">
<section id="contact" class="section" fade-in>
    <header class="section-header" as-fullHeight>
        <h1>Open Hailing Frequencies</h1>
        <p  fade-in>
            I'd love to hear from you about any development needs you may have. From WordPress themes or plugins or custom web applications, I can help.<br>
            <a href="#contact-form" class="uppercase float-right" as-scrollTo>Get in touch</a>
        </p>
    </header>
    <div class="section-content">
        {{#errors}}
        <div id="message" class="error" fade-in-out><p>{{errors}} <i class="close-message fa fa-times float-right" on-click="@this.set('errors', null)"></i></p></div>
        {{/errors}}
		{{#success}}
		<div id="message" class="success" fade-in-out><p>{{success}} <i class="close-message fa fa-times float-right" on-click="@this.set('success', null)"></i></p></div>
		{{/success}}
        <form id="contact-form">
            <label for="name"><i class="fa fa-fw fa-{{message.name ? 'check success' : 'times error'}}"></i> Name</label>
            <input
				id="name"
				type="text"
				class="{{message.name ? '' : 'required-field' }}"
				placeholder="your name"
				value="{{message.name}}"
			>
            <label for="email"><i class="fa fa-fw fa-{{message.validEmail() ? 'check success' : 'times error'}}"></i> Email</label>
            <input
                id="email"
                type="email"
				class="{{message.validEmail() ? '' : 'required-field'}}"
                placeholder="your email address"
                value="{{message.from}}"
            >
            <label for="subject"><i class="fa fa-fw fa-{{message.subject ? 'check success' : 'times error'}}"></i> Subject</label>
            <select
                id="subject"
				class="{{message.subject ? '' : 'required-field' }}"
                value="{{message.subject}}"
            >
                <option value="General">General</option>
                <option value="WordPress">WordPress</option>
                <option value="Custom">Custom Development</option>
                <option value="other">Other</option>
            </select>
            <label for="text"><i class="fa fa-fw fa-{{message.text ? 'check success' : 'times error'}}"></i> Message</label>
            <textarea
                id="text"
                name="text"
				class="{{message.text ? '' : 'required-field' }}"
                placeholder="Your message"
                value={{message.text}}
            ></textarea>
            <button class="" on-click="sendMessage">Send Message {{#loading}}<i class="fa fa-spinner fa-spin"></i>{{/loading}}</button>
        </form>
    </div>
</section>
</script>
